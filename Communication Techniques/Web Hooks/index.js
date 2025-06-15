const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse JSON request body
app.use(express.json());

// Serve static files (like index.html)
app.use(express.static(__dirname));

// Route for home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/webhook", (req, res) => {
  // Extract payload from req.body
  const payload = req.body;

  // Log the received payload
  console.log("Payload:", payload);

  // Optionally send response
  res.status(200).send("Webhook received successfully");
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
