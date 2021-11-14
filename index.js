const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 5000;

app.use(cors());

io.on('connect', (socket) => {

  socket.on('sendMessage', (message) => {
    console.log(" ================================================ ")
    console.log(" A MESSAGE WAS SEND ")
    console.log(message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log(" ================================================ ")
    console.log(" USER IS DISCONNECT ")
  })
});

server.listen(port, () => console.log(`Server has started on : http://localhost:${port} `));