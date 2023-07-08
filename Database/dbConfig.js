const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/";
const DB_NAME = "foodozer";

/**
 * CONNECT NODEJS WITH MONGOOSE
 */
mongoose
  .connect(`${URI}${DB_NAME}`)
  .then((response) => {
    // console.log("RESPONSE::", response);
    console.log("CONNECT TO::", URI);
  })
  .catch((error) => {
    console.log("ERROR CONNECTINMG TO DATABASE::", error);
  });
