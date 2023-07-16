var jwt = require("jsonwebtoken");
var SECRET_KEY = "ZOMATO_PORTAL_KEY";

/**
 *
 * @param {*} data
 * @output JWT-TOKEN
 */
function generateJWTToken(data = {}) {
  var token = jwt.sign(data, SECRET_KEY, { expiresIn: 60 * 60 });
  return token;
}

/**
 * @param {*} token
 * @output { name: 'vishnu', iat: 1689487986, exp: 1689491586 } if token is valid else error
 */
function verifyToken(token = "") {
  try {
    var decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
  } catch (err) {
    // err
    console.log("ERROR VERIFYING TOKEN::", err);
  }
}

module.exports = {
  generateJWTToken,
  verifyToken,
};
