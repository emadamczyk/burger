var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    console.log('hello from burgerland');
    res.render("index");
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
