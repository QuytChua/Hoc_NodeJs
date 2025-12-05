const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
require("dotenv").config();
const hostname = process.env.HOST_NAME || "localhost";
const port = process.env.PORT || 8080;

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
