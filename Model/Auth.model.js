const mongoose = require("mongoose");

// CREATING SCHEMA:: THE STRUCTURE OF DATA THATWE ARE DEALING WITH
const AuthSchema = mongoose.Schema({
  emailId: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    addressLine1: {
      type: String,
      required: false,
    },
    addressLine2: {
      type: String,
      required: false,
    },
    hometown: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    pincode: {
      type: Number,
      required: false,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("user", AuthSchema);
