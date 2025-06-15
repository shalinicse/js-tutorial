const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new Server(server);

// Serve static files (like index.html)
app.use(express.static(__dirname));

// Route for home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


io.on("connection", (socket) => {
  console.log("Connection Established");

  socket.on("Chat Message", (msg) => {
    // this is listening to input message
    console.log("Received Message", msg);
    io.emit("Chat Message", msg); //this is broadcasting the message received to the device that is connected to server
  });

  socket.on("Disconnected", () => {
    console.log("User disconnected");
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
