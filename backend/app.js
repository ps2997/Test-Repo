const express = require("express");
const app = express();
const connectDatabase = require("./config/database.js")

app.use(express.json());
//import routes
const check = require("./Routes/checkRoutes/check");





app.use("/api", check);


module.exports = app;
