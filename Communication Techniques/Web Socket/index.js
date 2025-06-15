const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(__dirname)); // to serve index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("Chat Message", (msg) => {
    console.log("Received:", msg);
    io.emit("Chat Message", msg);
  });
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
