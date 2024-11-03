(function() {
    var implementors = Object.fromEntries([["h3i",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"h3i/actions/h3/enum.Action.html\" title=\"enum h3i::actions::h3::Action\">Action</a>&gt; for <a class=\"type\" href=\"h3i/recordreplay/qlog/type.QlogEvents.html\" title=\"type h3i::recordreplay::qlog::QlogEvents\">QlogEvents</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"qlog/events/quic/struct.PacketSent.html\" title=\"struct qlog::events::quic::PacketSent\">PacketSent</a>&gt; for <a class=\"struct\" href=\"h3i/recordreplay/qlog/struct.H3Actions.html\" title=\"struct h3i::recordreplay::qlog::H3Actions\">H3Actions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"h3i/recordreplay/qlog/struct.H3FrameCreatedEx.html\" title=\"struct h3i::recordreplay::qlog::H3FrameCreatedEx\">H3FrameCreatedEx</a>&gt; for <a class=\"struct\" href=\"h3i/recordreplay/qlog/struct.H3Actions.html\" title=\"struct h3i::recordreplay::qlog::H3Actions\">H3Actions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"quiche/h3/struct.Header.html\" title=\"struct quiche::h3::Header\">Header</a>&gt;&gt; for <a class=\"enum\" href=\"h3i/frame/enum.H3iFrame.html\" title=\"enum h3i::frame::H3iFrame\">H3iFrame</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"quiche/h3/struct.Header.html\" title=\"struct quiche::h3::Header\">Header</a>&gt;&gt; for <a class=\"struct\" href=\"h3i/frame/struct.EnrichedHeaders.html\" title=\"struct h3i::frame::EnrichedHeaders\">EnrichedHeaders</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"h3i/frame/enum.H3iFrame.html\" title=\"enum h3i::frame::H3iFrame\">H3iFrame</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"h3i/client/connection_summary/struct.StreamMap.html\" title=\"struct h3i::client::connection_summary::StreamMap\">StreamMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"octets/struct.BufferTooShortError.html\" title=\"struct octets::BufferTooShortError\">BufferTooShortError</a>&gt; for <a class=\"enum\" href=\"h3i/prompts/h3/enum.Error.html\" title=\"enum h3i::prompts::h3::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"qlog/events/struct.Event.html\" title=\"struct qlog::events::Event\">Event</a>&gt; for <a class=\"struct\" href=\"h3i/recordreplay/qlog/struct.H3Actions.html\" title=\"struct h3i::recordreplay::qlog::H3Actions\">H3Actions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"qlog/events/struct.JsonEvent.html\" title=\"struct qlog::events::JsonEvent\">JsonEvent</a>&gt; for <a class=\"struct\" href=\"h3i/recordreplay/qlog/struct.H3Actions.html\" title=\"struct h3i::recordreplay::qlog::H3Actions\">H3Actions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Frame&gt; for <a class=\"enum\" href=\"h3i/frame/enum.H3iFrame.html\" title=\"enum h3i::frame::H3iFrame\">H3iFrame</a>"]]],["qlog",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"enum\" href=\"qlog/events/enum.EventData.html\" title=\"enum qlog::events::EventData\">EventData</a>&gt; for <a class=\"enum\" href=\"qlog/events/enum.EventType.html\" title=\"enum qlog::events::EventType\">EventType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"qlog/events/enum.EventType.html\" title=\"enum qlog::events::EventType\">EventType</a>&gt; for <a class=\"enum\" href=\"qlog/events/enum.EventCategory.html\" title=\"enum qlog::events::EventCategory\">EventCategory</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"qlog/events/enum.EventType.html\" title=\"enum qlog::events::EventType\">EventType</a>&gt; for <a class=\"enum\" href=\"qlog/events/enum.EventImportance.html\" title=\"enum qlog::events::EventImportance\">EventImportance</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"qlog/enum.Error.html\" title=\"enum qlog::Error\">Error</a>"]]],["quiche",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"quiche/enum.Error.html\" title=\"enum quiche::Error\">Error</a>&gt; for <a class=\"enum\" href=\"quiche/h3/enum.Error.html\" title=\"enum quiche::h3::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"octets/struct.BufferTooShortError.html\" title=\"struct octets::BufferTooShortError\">BufferTooShortError</a>&gt; for <a class=\"enum\" href=\"quiche/enum.Error.html\" title=\"enum quiche::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"octets/struct.BufferTooShortError.html\" title=\"struct octets::BufferTooShortError\">BufferTooShortError</a>&gt; for <a class=\"enum\" href=\"quiche/h3/enum.Error.html\" title=\"enum quiche::h3::Error\">Error</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"quiche/struct.ConnectionId.html\" title=\"struct quiche::ConnectionId\">ConnectionId</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"quiche/struct.ConnectionId.html\" title=\"struct quiche::ConnectionId\">ConnectionId</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[4649,1570,2173]}