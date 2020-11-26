
var express = require('express');
var router = express.Router();
var roomUser=require('./roomUser')

router.post('/login', function (req, res) {
    roomUser.push(req.body)
    res.send(req.body)
});
module.exports = router;