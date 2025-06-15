const express = require("express");
const app = express();
// data form db
let data = "Initial database";
const waitingClients = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingClients.push(res);
  }
});

app.get("/updateData", (req, res) => {
  //clients res array is waiting list [c1,c2,c3]
  data = req.query.data;
  while (waitingClients.length > 0) {
    const client = waitingClients.pop();
    client.json({ data });
  }
  res.send({ success: "Data Updated Successfully" });
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
