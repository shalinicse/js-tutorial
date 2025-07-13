const express = require("express");
const { title } = require("process");
const PORT = 3000;
const app = express();
app.use((req, res, next) => {
  res.setHeader("Referer-Policy", "no-referrer");
  res.removeHeader("X-Powered-By");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader(
    "Strict-Transport-Policy",
    "max-age=31536000; includeSubDomains; preload"
  );
  next();
});
const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.headers("Host"), req.url].join(""));
  }
  next();
};
app.use(redirectToHttps);
app.get("/list", (req, res) => {
  res.send([{ id: 1, title: "First Post" }]);
});
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
