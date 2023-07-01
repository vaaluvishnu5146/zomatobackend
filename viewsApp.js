const express = require("express");
const viewsApp = express();

viewsApp.get("/", (request, response, next) => {
  response.render("pages/index", {
    pageName: "Home",
    description: "Home page will help you undertand the application",
  });
});

viewsApp.get("/about", (request, response, next) => {
  response.render("pages/about", {
    pageName: "About US",
    description: "About page will help you undertand the application",
  });
});

module.exports = viewsApp;
