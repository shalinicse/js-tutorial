const express = require("express");
const PORT = 3001;
const app = express();
// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");
//   next();
// });
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/iframe-website1", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website1.html");
});
app.get("/iframe-website2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website2.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
