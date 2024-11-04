#![feature(wasip2)]

use core::panic;

use ring::rand::{SecureRandom, SystemRandom};

const MAX_DATAGRAM_SIZE: usize = 1350;
const HTTP_REQ_STREAM_ID: u64 = 4;

fn main() {
    let url = url::Url::parse("https://localhost:4242").unwrap();

    let peer_addr = url.socket_addrs(|| None).unwrap()[0];
    let bind_addr: std::net::SocketAddr = match peer_addr {
        std::net::SocketAddr::V4(_) => "0.0.0.0:0",
        std::net::SocketAddr::V6(_) => "[::]:0",
    }
    .parse()
    .unwrap();

    let socket = std::net::UdpSocket::bind(bind_addr).unwrap();

    let mut config = quiche::Config::new(quiche::PROTOCOL_VERSION).unwrap();

    // disable cert check
    config.verify_peer(false);

    do_some_other_config(&mut config);

    // first create scid with some randomness
    let mut scid = [0; quiche::MAX_CONN_ID_LEN];
    SystemRandom::new().fill(&mut scid[..]).unwrap();

    // then shadow scid variable with actual non-mutable value
    let scid = quiche::ConnectionId::from_ref(&scid);

    let local_addr = socket.local_addr().unwrap();

    let mut conn =
        quiche::connect(url.domain(), &scid, local_addr, peer_addr, &mut config).unwrap();

    println!("Connecting to {peer_addr} from {local_addr}",);

    let mut out = [0; MAX_DATAGRAM_SIZE];

    let (write, send_info) = conn.send(&mut out).expect("oh dear. initial send failed");

    while let Err(e) = socket.send_to(&out[..write], send_info.to) {
        if e.kind() == std::io::ErrorKind::WouldBlock {
            println!("send() would block");
            continue;
        }

        panic!("send() failed {:?}", e);
    }

    println!("written {}", write);

    // now the negotation(?) part starts
    let req_start = std::time::Instant::now();

    let mut req_sent = false;

    // setup the event loop
    let mut poll = mio::Poll::new().unwrap();
    let mut events = mio::Events::with_capacity(1024);

    let mut buf = [0; 65535];

    loop {
        let _ = poll.poll(&mut events, conn.timeout());

        'read: loop {
            if events.is_empty() {
                println!("timed out");

                conn.on_timeout();
                break 'read;
            }

            let (len, from) = match socket.recv_from(&mut buf) {
                Ok(v) => v,
                Err(e) => {
                    if e.kind() == std::io::ErrorKind::WouldBlock {
                        println!("recv() would block");
                        break 'read;
                    }

                    panic!("recv() failed {:?}", e);
                }
            };

            println!("got {len} bytes");

            let recv_info = quiche::RecvInfo {
                to: socket.local_addr().unwrap(),
                from,
            };

            let read = match conn.recv(&mut buf[..len], recv_info) {
                Ok(v) => v,
                Err(e) => {
                    println!("recv failed {:?}", e);
                    continue 'read;
                }
            };

            println!("processed {} bytes", read);
        }

        println!("done reading");

        if conn.is_closed() {
            println!("connection closed, {:?}", conn.stats());
            break;
        }

        if conn.is_established() && !req_sent {
            println!("sending HTTP request for {}", url.path());

            let req = format!("GET {}\r\n", url.path());
            conn.stream_send(HTTP_REQ_STREAM_ID, req.as_bytes(), true)
                .unwrap();

            req_sent = true;
        }

        // Process all readable streams.
        for s in conn.readable() {
            while let Ok((read, fin)) = conn.stream_recv(s, &mut buf) {
                println!("received {} bytes", read);

                let stream_buf = &buf[..read];

                println!("stream {} has {} bytes (fin? {})", s, stream_buf.len(), fin);

                print!("{}", unsafe { std::str::from_utf8_unchecked(stream_buf) });

                // The server reported that it has no more data to send, which
                // we got the full response. Close the connection.
                if s == HTTP_REQ_STREAM_ID && fin {
                    println!("response received in {:?}, closing...", req_start.elapsed());

                    conn.close(true, 0x00, b"kthxbye").unwrap();
                }
            }
        }

        // Generate outgoing QUIC packets and send them on the UDP socket, until
        // quiche reports that there are no more packets to be sent.
        loop {
            let (write, send_info) = match conn.send(&mut out) {
                Ok(v) => v,

                Err(quiche::Error::Done) => {
                    println!("done writing");
                    break;
                }

                Err(e) => {
                    println!("send failed: {:?}", e);

                    conn.close(false, 0x1, b"fail").ok();
                    break;
                }
            };

            if let Err(e) = socket.send_to(&out[..write], send_info.to) {
                if e.kind() == std::io::ErrorKind::WouldBlock {
                    println!("send() would block");
                    break;
                }

                panic!("send() failed: {:?}", e);
            }

            println!("written {}", write);
        }

        if conn.is_closed() {
            println!("connection closed, {:?}", conn.stats());
            break;
        }
    }
}

fn do_some_other_config(config: &mut quiche::Config) {
    config
        .set_application_protos(&[b"hq-interop", b"hq-29", b"hq-28", b"hq-27", b"http/0.9"])
        .unwrap();

    config.set_max_idle_timeout(5000);
    config.set_max_recv_udp_payload_size(MAX_DATAGRAM_SIZE);
    config.set_max_send_udp_payload_size(MAX_DATAGRAM_SIZE);
    config.set_initial_max_data(10_000_000);
    config.set_initial_max_stream_data_bidi_local(1_000_000);
    config.set_initial_max_stream_data_bidi_remote(1_000_000);
    config.set_initial_max_streams_bidi(100);
    config.set_initial_max_streams_uni(100);
    config.set_disable_active_migration(true);
}

fn _other_server() {
    println!("HEY");

    let mut buf = [0; 512];
    let socket = std::net::UdpSocket::bind("127.0.0.1:0").unwrap();

    let mut config = quiche::Config::new(quiche::PROTOCOL_VERSION)
        .expect("quiche protocol version is expected to be valid");
    println!("{}", quiche::PROTOCOL_VERSION);

    let scid = quiche::ConnectionId::from_ref(&[0xba, 16]);
    let local = socket.local_addr().unwrap();
    let peer = "127.0.0.1:1234".parse().unwrap();

    let conn = quiche::accept(&scid, None, local, peer, &mut config);

    println!("Now running on {local} and {peer}");

    if conn.is_err() {
        panic!("unidiomatic way to quit on an error in rust :P");
    }

    let mut conn = conn.unwrap();

    loop {
        let (read, from) = socket.recv_from(&mut buf).unwrap();

        let recv_info = quiche::RecvInfo { from, to: local };
        let read = match conn.recv(&mut buf[..read], recv_info) {
            Ok(v) => v,
            Err(e) => {
                println!("This is a error, that show up just now {}", e);
                break;
            }
        };
        println!("We just now received this informations bits {}", read);
    }
}
