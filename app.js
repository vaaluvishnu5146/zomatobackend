const express = require("express");
const app = express();
const fs = require("node:fs/promises"); // ASYNCHRONOUS
// const fs = require("node:fs/promises"); SYNCHRONOUS

app.get("/", (request, response, next) => {
  console.log("Hello i am get request");
  return response.status(200).json({
    message: "Api working",
  });
});

app.get("/createFile", async (request, response, next) => {
  const fileName = `${new Date().getDate()}-Time(${new Date().getHours()}-${new Date().getMinutes()})`;
  try {
    await fs.appendFile(`files/${fileName}.txt`, `${new Date()}`);
    // fs.appendFile(`files/${fileName}.txt`, `${new Date()}`, {}, () => {
    //   console.log("File created successfully");
    // });
    return response.status(200).json({
      message: "File Created successfully",
    });
  } catch (error) {
    return response.status(400).json({
      message: error,
    });
  }
});

module.exports = app;
