const socket = io("https://tda.mr486.com:4001",{ transports: ['websocket', 'polling', 'flashsocket'] });
io.on("maj_reunion", (msg) => console.info(msg));
