const MentorController = require("express").Router();
const MentorModel = require("../Model/Mentor.model");

/**
 * ENDPOINT - GET ALL Mentor DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/mentors/
 */
MentorController.get("/", (request, response, next) => {
  MentorModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Mentor fetched",
          result: data,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Mentor found",
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

/**
 * ENDPOINT - POST A Mentor Data
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/restaurants/create
 */
MentorController.post("/create", (request, response, next) => {
  console.log("MENTOR DATA", request.body);
  const {
    mentorName,
    mentorEmail,
    mentorContactNumber,
    courseId,
    skills,
    primaryLanguage,
    secondaryLanguage,
  } = request.body;
  const Mentor = new MentorModel({
    mentorName,
    mentorEmail,
    mentorContactNumber,
    courseId,
    skills,
    primaryLanguage,
    secondaryLanguage,
  });
  Mentor.save()
    .then((resp) => {
      return response.status(200).json({
        message: "Mentor saved successfully!!",
      });
    })
    .catch((error) => {
      console.log("ERROR", error);
      return response.status(400).json({
        message: "Mentor saving failed!!",
        error,
      });
    });
});

module.exports = MentorController;
