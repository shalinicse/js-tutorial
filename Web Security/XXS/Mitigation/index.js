const express = require("express");
const PORT = 3000;
const app = express();
//set csp headers to load all
// resoureces from our own source and no orther source
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
  );
  next();
});
// will give below error

// Refused to load the script 'http://unsecure.com/abc.js' because it violates the
// following Content Security Policy directive: "default-src 'self'". Note that 'script-src-elem'
// was not explicitly set, so 'default-src' is used as a f  allback.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
