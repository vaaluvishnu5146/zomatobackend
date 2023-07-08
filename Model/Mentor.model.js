const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THATWE ARE DEALING WITH
const MentorSchama = mongoose.Schema({
  mentorName: {
    type: String,
  },
  mentorEmail: {
    type: String,
  },
  mentorContactNumber: {
    type: String,
  },
  coursesId: {
    type: Array,
  },
  skills: {
    type: Array,
  },
  primaryLanguage: {
    type: Array,
  },
  secondaryLanguage: {
    type: Array,
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

module.exports = mongoose.model("mentor", MentorSchama);
