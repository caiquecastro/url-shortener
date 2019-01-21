const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const UrlController = require("./controllers/UrlController");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/urls", UrlController.index);

app.post("/urls", UrlController.store);

app.get("/:id", UrlController.show);

app.listen(3001);
