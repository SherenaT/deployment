const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../images/hello-kitty-credit-sanrio.jpg"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
