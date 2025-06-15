const express = require("express");
const app = express();
// data form db

app.get("/sse", (req, res) => {
  // sse setup
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");

  res.write("data: Welcome to Server Sent Event \n\n");

  let intervalId = setInterval(() => {
    res.write(`data: Server Time is ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
