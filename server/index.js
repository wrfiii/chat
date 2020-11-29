const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql      = require('mysql');
let roomUsers = [];

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port: 3306,
    password : 'root',
    database : 'user'
  });
  const sql = `INSERT INTO user(user_account)`

  connection.connect((err=>{
      if(err){
          throw new Error(err)
      }
    //   connection.query(sql,(err=>{
    //       if(err){
    //           console.log(err);
    //           return
    //       }
    //       console.log('插入成功');
    //   }))
      console.log('连接成功');
  }));

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
const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on('connection', (socket) => { /* … */
    socket.on('event', data => { /* … */
        console.log('新的事件', data);
    });
    socket.on('disconnect', data => { /* … */
        console.log(socket.userName);
        socket.broadcast.emit('disconnectUser',
            socket.userName
        );
    });
    socket.on('message', data => { /* … */
        socket.broadcast.emit('msg', {
            data
        });
    });

    socket.on('newUser', data => {
        socket.broadcast.emit('newUser', data);
        socket.userName = data;
    })
});
server.on('*', () => {
    console.log(123);
})

app.post('/login', function (req, res) {
    roomUsers.push(req.body)
    console.log(req.body);
    res.send('ok')
});



server.listen(3000);