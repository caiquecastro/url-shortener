const cors = require("cors");
const knex = require("knex");
const express = require("express");
const bodyParser = require("body-parser");
const randomstring = require("randomstring");

const appUrl = "http://localhost:3001";

const app = express();
const db = knex({
  client: "sqlite",
  connection: {
    filename: "./urlshortener.sqlite"
  },
  useNullAsDefault: true
});

app.use(cors());
app.use(bodyParser.json());

app.get("/urls", async (req, res) => {
  const urls = await db("urls");

  res.json(
    urls.map(url => {
      return {
        ...url,
        shortened: `${appUrl}/${url.shortened}`
      };
    })
  );
});

app.post("/shortener", async (req, res, next) => {
  try {
    const originalUrl = req.body.url;
    const shortenedUrl = randomstring.generate(7);

    await db("urls").insert({
      original: originalUrl,
      shortened: shortenedUrl,
      date: new Date()
    });

    res.json({
      originalUrl,
      shortenedUrl: `${appUrl}/${shortenedUrl}`
    });
  } catch (err) {
    next(err);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const url = await db("urls")
      .where("shortened", req.params.id)
      .first();

    if (!url) {
      res.json(404).json({});
    }

    await db("urls")
      .update({
        clicks: url.clicks + 1
      })
      .where("id", url.id);

    res.redirect(url.original);
  } catch (err) {
    next(err);
  }
});

app.listen(3001);
