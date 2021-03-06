const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const UrlController = require("./controllers/UrlController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(history());

app.get("/urls", UrlController.index);

app.post("/urls", UrlController.store);

app.get("/:id", UrlController.show);

app.use(express.static(path.join(__dirname, "../dist")));

app.listen(PORT);

process.on("SIGINT", () => {
  process.exit(0);
});
