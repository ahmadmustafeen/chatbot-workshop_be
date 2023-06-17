const express = require("express");
const app = express();

app.post("/", (req, res) => {
  const { message } = req.body;
  res.send("Yo!");
});

module.exports = app;
