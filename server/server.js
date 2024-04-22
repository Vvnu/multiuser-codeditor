const express = require('express')
const app = express();
const cors = require('cors');
const http =  require('http');
const {Server} = require('socket.io');

const frontendURL='http://192.168.123.199:3000'
// const frontendURL='http://localhost:3001'

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: frontendURL
});

io.on('connection', (socket) => {
    console.log('socket connected', socket.id );

    socket.on('joinroom', (data)=>{
        console.log(data)
        socket.join(data.roomId)
    })

    socket.on('send', (data)=>{
        console.log(data)
        io.to(data.roomId).emit('receive', data)
    })
});

const PORT =  5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));