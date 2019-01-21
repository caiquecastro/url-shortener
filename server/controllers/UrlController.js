const knex = require("knex");
const randomstring = require("randomstring");
const config = require("../config");

const db = knex(config.database);
const appUrl = "http://localhost:3001";

exports.index = async (req, res) => {
  const urls = await db("urls");

  res.json(
    urls.map(url => {
      return {
        ...url,
        shortened: `${appUrl}/${url.shortened}`
      };
    })
  );
};

exports.store = async (req, res, next) => {
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
};

exports.show = async (req, res, next) => {
  try {
    const url = await db("urls")
      .where("shortened", req.params.id)
      .first();

    if (!url) {
      return res.json(404).json({});
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
};
