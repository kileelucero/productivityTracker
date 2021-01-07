require('dotenv').config()
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Static folder
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// require("")(app);
// require("")(app);
// require("")(app);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});