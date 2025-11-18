const express = require("express")
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")

const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET","POST"]
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    });
});

server.listen(3001, () => {
    console.log("port 3001")
})