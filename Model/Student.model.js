const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THATWE ARE DEALING WITH
const StudentSchama = mongoose.Schema({
  studentName: {
    type: String,
  },
  studentEmail: {
    type: String,
  },
  studentContactNumber: {
    type: String,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  currentMentorId: { type: Schema.Types.ObjectId, ref: "mentor" },
  otherMentorId: {
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

module.exports = mongoose.model("student", StudentSchama);
