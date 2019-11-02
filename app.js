const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const resList = require("./restaurant.json");

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// setting routes
app.get("/", (req, res) => {
  res.render("index", { restaurants: resList.results });
});

app.get("/restaurants/:resId", (req, res) => {
  const restaurants = resList.results.find(
    res => res.id.toString() === req.params.resId
  );
  res.render("show", { res: restaurants });
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const resSearch = resList.results.filter(res => {
    if (keyword !== " ") {
      return (
        res.name.toLowerCase().includes(keyword.toLowerCase()) ||
        res.category.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  });
  res.render("index", { restaurants: resSearch, keyword: keyword });
});

// listening
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
