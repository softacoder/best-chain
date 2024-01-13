const Websocket = require("ws");

const P2P_PORT = process.env.PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(",") : [];

class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  listen() {
    const server = new Websocket.Server({ port: P2P_PORT });
    server.on("connection", (socket) => this.connectSocket(socket));

    this.connectToPeers();

    console.log("listening for peer-to-peer connections on: ${P2P_PORT}");
  }

  connectSocket(socket) {
    this.sockets.push(socket);
    console.log("Socket connected");
  }

  connectToPeers() {
    peers.forEach((peer) => {
      const socket = new Websocket(peer);

      socket.on("open", (socket) => this.connectSocket(socket));
    });
  }
}
