import * as  io from "socket.io-client";
var options = {
    rememberUpgrade: true,
    transports: ["websocket"],
    secure: true,
    rejectUnauthorized: false,
};


class ws {
    ws: any
    constructor() {
        this.ws = io('http://localhost:3000', options)
        this.ws.on("connect", (socket) => {
            this.connect(socket)
        });
        this.ws.on('open', socket => {
            this.open(socket)
        })
        this.ws.on('close', socket => {
            this.close(socket)
        })
        this.ws.on('error', socket => {
            this.error(socket)
        })
        this.ws.on('event', socket => {
            this.event(socket)
        })
        this.ws.on('message', socket => {
            this.event(socket)
        })

    }
    connect(socket) {
        console.log('连接成功');
    }

    open(socket) {

    }

    close(socket) {

    }

    error(socket) {

    }
    event(socket) {

    }
    message(socket) {

    }
    send(msg) {
        this.ws.send(msg)
    }
}
export default ws