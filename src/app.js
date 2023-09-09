const apiFilm = require("./utils/apiFilm");
const app = require("./config");

const port = process.PORT || 3000;

app.get("/", (_, res) => {
  res.render("index");
});

app.get("/movies", (req, res) => {
  if (!req.query.name) {
    return res.send({
      error: "You must provide a search term",
    });
  } else {
    apiFilm(req.query.name, (error, data) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({
        pictures: data.pictures,
        title: data.title,
        describe: data.describe,
        date: data.date,
        name: req.query.name,
      });
    });
  }
});

app.get("*", (_, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port + " 👌");
});
