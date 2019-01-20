const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/shortener", (req, res) => {
  res.json({
    originalUrl: req.body.url,
    shortenedUrl: "http://bit.ly/demo2"
  });
});

app.listen(3001);
