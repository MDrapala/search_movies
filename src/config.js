const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

//Definir configuration express
const publicDirectoryPath = path.join(__dirname, "../public/");
const viewsDirectoryPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsDirectoryPath);

app.use(express.static(publicDirectoryPath));

module.exports = app;
