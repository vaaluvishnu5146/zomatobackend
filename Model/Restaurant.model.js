const mongoose = require("mongoose");

// CREATING SCHEMA:: THE STRUCTURE OF DATA THATWE ARE DEALING WITH
const RestaurantSchama = mongoose.Schema({
  restaurantName: {
    type: String,
  },
  addressDetails: {
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  contactDetails: {
    primaryEmail: {
      type: String,
    },
    primaryContactNumber: {
      type: String,
    },
  },
  generalDetails: {
    cuisine: {
      type: Array,
    },
    foodType: {
      type: Array,
    },
    isOpen: {
      type: Boolean,
    },
    logo: {
      type: String,
    },
  },
});

module.exports = mongoose.model("restaurant", RestaurantSchama);
