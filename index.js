const express = require("express");
const bodyParser = require("body-parser");
const chat = require("./routes/chat");

const app = express();
app.use(bodyParser.json());

app.use("/chat", chat);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 4000);
