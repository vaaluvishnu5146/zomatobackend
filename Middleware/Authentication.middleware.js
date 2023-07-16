function checkJWTValidity(req, res, next) {
  const token = req.headers.token;
  if (token) {
    next();
  } else {
    return res.status(401).json({
      error: "Token Expired",
      message: "Login to see the content",
      success: false,
    });
  }
}

module.exports = {
  checkJWTValidity,
};
