const MahalController = require("express").Router();

const mahal = [];

/**
 * ENDPOINT - GET ALL MAHAL DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/mahal/
 */
MahalController.get("/", (request, response, next) => {
  return response.status(200).json({
    message: "Mahal Fetched Successfully!!",
    data: mahal,
  });
});

/**
 * ENDPOINT - POST A MAHAL DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/mahal/createMahal
 */
MahalController.post("/createMahal", (request, response, next) => {
  const {
    name = "",
    pricePerHour = "",
    noOfSeats = 0,
    amenities = [],
  } = request.body;
  if (name && pricePerHour && noOfSeats && amenities) {
    mahal.push({
      name,
      pricePerHour,
      noOfSeats,
      amenities,
    });
    return response.status(200).json({
      message: "Mahal created successfully!!",
    });
  } else {
    return response.status(400).json({
      message: "Error: Saving Data!!!",
    });
  }
});

module.exports = MahalController;
