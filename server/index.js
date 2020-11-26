const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// var api = require('./src/api.js');
let roomUser = [];

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    next();
})
app.use(bodyParser.json({ limit: '1mb' }));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
// app.use('/', api);
const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on('connection', (socket) => { /* … */
    // io.emit('sb', '你好哦')
    socket.on('event', data => { /* … */
        console.log('新的事件', data);
    });
    socket.on('disconnect', data => { /* … */
        console.log('断开连接', data)
    });
    socket.on('message', data => { /* … */
        console.log(roomUsrs);
        console.log('新的消息', data);
    });
});
server.on('*', () => {
    console.log(123);
})

app.post('/login', function (req, res) {
    roomUser.push(req.body)
    res.send('ok')
});



server.listen(3000);