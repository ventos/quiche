#define getrandom(a,b,c) = getentropy(a,b)|b
#define socket(a,b,c) = -1
#define setsockopt(a,b,c,d,e) = -1
#define connect(a,b,c) = -1
