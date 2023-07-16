const express = require("express");
const viewsApp = express();
const { checkJWTValidity } = require("./Middleware/Authentication.middleware");

viewsApp.get("/", checkJWTValidity, (request, response, next) => {
  response.render("pages/index", {
    pageName: "Home",
    description: "Home page will help you undertand the application",
  });
});

viewsApp.get("/about", checkJWTValidity, (request, response, next) => {
  response.render("pages/about", {
    pageName: "About US",
    description: "About page will help you undertand the application",
  });
});

viewsApp.get("/login", checkJWTValidity, (request, response, next) => {
  response.render("pages/login", {
    error: "",
  });
});

module.exports = viewsApp;
