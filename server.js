require('dotenv').config()
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models")

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
const html = require("./routes/html-routes");
app.use(html);
const work = require("./routes/work-api-route");
app.use("/work-inquiry", work);
const sleep = require("./routes/sleep-api-route");
app.use("/sleep-inquiry", sleep);
const famfriend = require("./routes/famfriend-api-route");
app.use("/family&friends", famfriend);
const exercise = require("./routes/exercise-api-route");
app.use("/exercise", exercise);
const other = require("./routes/other-api-route");
app.use("/other-value", other);


// Start server
db.sequelize.sync({}).then(() => {
  app.listen(PORT, function() {});
});