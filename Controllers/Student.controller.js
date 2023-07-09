const StudentController = require("express").Router();
const StudentModel = require("../Model/Student.model");

/**
 * ENDPOINT - GET all Students
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/student/
 */
StudentController.get("/", (request, response, next) => {
  StudentModel.find({})
    .populate("currentMentorId", "mentorName mentorContactNumber")
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Students fetched",
          result: data,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Student found",
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
 * ENDPOINT - POST A Student
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/student/create
 */
StudentController.post("/create", (request, response, next) => {
  const {
    studentName,
    studentEmail,
    studentContactNumber,
    courseId,
    currentMentorId,
    otherMentorId,
    skills,
    primaryLanguage,
    secondaryLanguage,
  } = request.body;
  const Student = new StudentModel({
    studentName,
    studentEmail,
    studentContactNumber,
    courseId,
    currentMentorId,
    otherMentorId,
    skills,
    primaryLanguage,
    secondaryLanguage,
  });
  Student.save()
    .then((resp) => {
      return response.status(200).json({
        message: "Student saved successfully!!",
      });
    })
    .catch((error) => {
      console.log("ERROR", error);
      return response.status(400).json({
        message: "Student saving failed!!",
        error,
      });
    });
});

/**
 * ENDPOINT - Filter and Get Students Data
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/student/
 */
StudentController.get("/:mentorId", (request, response, next) => {
  const { mentorId } = request.params;
  StudentModel.find({ currentMentorId: mentorId })
    .then((resp) => {
      if (resp.length > 0) {
        return response.status(200).json({
          message: "Student fetched successfully!!",
          result: resp,
        });
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      return response.status(400).json({
        message: "Student saving failed!!",
        error,
      });
    });
});

module.exports = StudentController;
