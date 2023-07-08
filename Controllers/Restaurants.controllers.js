const RestaurantController = require("express").Router();
const RestaurantModel = require("../Model/Restaurant.model");
const { response } = require("../app");

/**
 * ENDPOINT - GET ALL RESTAURANTS DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/restaurants/
 */
RestaurantController.get("/", (request, response, next) => {
  RestaurantModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Restaurants fetched",
          result: data,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! Restaurants found",
          result: data,
        });
      }
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Error occured",
        error: error,
      });
    });
});

module.exports = RestaurantController;
