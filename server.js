var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

var SerialPort = require('serialport').SerialPort;
var serialport = new SerialPort('/dev/ttyS0', {baudrate: 115200});

app.use(express.static(__dirname + '/public'));

serialport.on('open', function() {
  console.log('port open');
});

io.on('connection', function(socket){
  console.log('opened');
  serialport.on('data', function(data){
    var str = data.toString();
    console.log('->', str);
    serialport.write(str);
    socket.emit('message', str);
  });
});

server.listen(port, function(){
  console.log('->', port);
});
