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
    }
    send(msg){
        this.ws.send(msg)
    }
    on(e,cb){
           this.ws.on(e,cb) 
    }
    emit(e,data){
        this.ws.emit(e,data)
    }
}
export default ws