const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const UrlController = require("./controllers/UrlController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/urls", UrlController.index);

app.post("/urls", UrlController.store);

app.get("/:id", UrlController.show);

app.listen(PORT);

process.on("SIGINT", () => {
  process.exit(0);
});
