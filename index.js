/**
 * 1. CREATE BASIC EXPRESS SERVER
 */
const express = require("express");
const httpServer = express();

//IMPORTING APPS
const app = require("./app");
const viewsApp = require("./viewsApp");

// set the view engine to ejs
httpServer.set("view engine", "ejs");

const PORT = 5000;

httpServer.listen(PORT, "localhost", () => {
  console.log("Server started");
});

// API
httpServer.use("/api", app);

// VIEWS
httpServer.use("/", viewsApp);
