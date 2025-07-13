const express = require("express");
const PORT = 4000;
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});
app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});
app.get("/example3", (req, res) => {
  res.sendFile(__dirname + "/public/example3.html");
});
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
