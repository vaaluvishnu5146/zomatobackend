const express = require("express");
const app = express();
const RestaurantsController = require("./Controllers/Restaurants.controllers");
const MentorController = require("./Controllers/Mentor.controller");
const StudentController = require("./Controllers/Student.controller");

app.use("/restaurants", RestaurantsController);
app.use("/mentor", MentorController);
app.use("/student", StudentController);
console.log(process.env);
/**
 * URL PARAMS
 * https://www.zomato.com/city/restaurants/5368745324673?deliveryType=delivery&payment=COD
 */

// app.get("/", (request, response, next) => {
//   console.log("Hello i am get request");
//   return response.status(200).json({
//     message: "Api working",
//   });
// });

// app.post("/createFile", async (request, response, next) => {
//   const { data = "" } = request.body;
//   const fileName = `${new Date().getDate()}-Time(${new Date().getHours()}-${new Date().getMinutes()})`;
//   try {
//     await fs.appendFile(`files/${fileName}.txt`, `${data} ${new Date()}`);
//     // fs.appendFile(`files/${fileName}.txt`, `${new Date()}`, {}, () => {
//     //   console.log("File created successfully");
//     // });
//     return response.status(200).json({
//       message: "File Created successfully",
//     });
//   } catch (error) {
//     return response.status(400).json({
//       message: error,
//     });
//   }
// });

// app.get("/:city/restaurants/:restaurantId", (request, response, next) => {
//   const { city = "", restaurantId = "" } = request.params;
//   const { deliveryType = "" } = request.query;
//   console.log(city, restaurantId, deliveryType);
//   return response.status(200).json({
//     message: "Food Items Fetched Succcesfully!!",
//   });
// });

module.exports = app;
