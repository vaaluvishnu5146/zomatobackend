const AuthController = require("express").Router();
const AuthModel = require("../Model/Auth.model");

async function getMatchingUser(emailId = "") {
  return await AuthModel.find({ emailId: emailId })
    .then((data) => data)
    .catch((error) => {
      return response.status(400).json({
        message: "Error ocurred",
        error: error,
      });
    });
}

/**
 * ENDPOINT - GET ALL USERS
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/login/:emailId
 */
AuthController.get("/", (request, response, next) => {
  AuthModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Users fetched successfully",
          result: data,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Users found",
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
 * ENDPOINT - GET ALL USER
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/login/:emailId
 */
AuthController.get("/:emailId", async (request, response, next) => {
  const { emailId = "" } = request.params;
  try {
    const matchingUser = await getMatchingUser(emailId);
    console.log("MATCHING USER", matchingUser);
    if (matchingUser.length > 0) {
      return response.status(200).json({
        message: "User fetched successfully",
        result: matchingUser,
      });
    } else {
      return response.status(200).json({
        message: "Alas!! No User found",
        result: matchingUser,
      });
    }
  } catch (error) {
    return response.status(400).json({
      message: "Error ocurred",
      error: error,
    });
  }
});

/**
 * ENDPOINT - POST A USER
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/user/create
 * HELPS USER TO CREATE ACCOUNT WITH OUR APPLICATION
 */
AuthController.post("/create", (request, response, next) => {
  const { emailId, password, phoneNumber } = request.body;
  const User = new AuthModel({
    emailId,
    password,
    phoneNumber,
  });
  User.save()
    .then((resp) => {
      return response.status(200).json({
        message: "User Signup is successful!!",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "User Signup failed!!",
        error,
      });
    });
});

/**
 * ENDPOINT - SIGN IN USER
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/user/create
 * HELPS USER TO CHECK WHETHER USER EMAIL ID AND PASSWORD IS MATCHING WITH DATABASE
 */
AuthController.post("/login", async (request, response, next) => {
  console.log(request.body);
  const { emailId, password, applicationType } = request.body;
  try {
    const matchingUser = await getMatchingUser(emailId);
    console.log(request.body, matchingUser);

    if (matchingUser.length > 0 && matchingUser[0].password === password) {
      if (applicationType === "webApp") {
        return response.render("pages/about", {
          pageName: "About US",
          description: "About page rendered after logging in",
        });
      }
      return response.status(200).json({
        message: "Login SuccessFull!!!",
      });
    } else {
      if (applicationType === "webApp") {
        return response.render("pages/login", {
          error: "Email Id or Password is wrong",
        });
      }
      return response.status(400).json({
        message: "Login failed!!!",
        error: "Email Id or Password is wrong",
      });
    }
  } catch (error) {
    if (applicationType === "webApp") {
      return response.render("pages/login", {
        error: "Email Id or Password is wrong",
      });
    }
    return response.status(302).status(400).json({
      message: "Login failed!!!",
      error: error,
    });
  }
});

module.exports = AuthController;
