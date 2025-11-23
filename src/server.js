const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();
const hostname = process.env.HOST_NAME || "localhost";
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("checking abc route");
});

//config static files
app.use(express.static(path.join(__dirname, "public")));
// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/hoi", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
