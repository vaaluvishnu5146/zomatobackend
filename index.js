/**
 * 1. CREATE BASIC EXPRESS SERVER
 */
const express = require("express");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");

/**
 * ENABLING ENVIRONMENT VARIABLES IN NODE PROJECT
 */
dotenv.config();

/**
 * INJECTING DATABASE CONFIGURATIONS
 */
require("./Database/dbConfig");

const httpServer = express();

//IMPORTING APPS
const app = require("./app");
const viewsApp = require("./viewsApp");

// set the view engine to ejs
httpServer.set("view engine", "ejs");

// INJECTING MIDDLEWARES
// CONFIGURE BODY PARSER MIDDLE WARE
httpServer.use(bodyParser.json());

const PORT = 5000;

httpServer.listen(PORT, "localhost", () => {
  console.log("Server started");
});

// API SERVER
httpServer.use("/api", app);

// WEB SERVER
httpServer.use("/", viewsApp);
