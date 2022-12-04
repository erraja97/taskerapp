//import mongoose
const mongoose = require("mongoose");
//destructing MONGODB_URL from .env
const { MONGODB_URL } = process.env;

exports.dbConnect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log("Database Connected Successfully");
      console.log(`Host Name: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log("Database Connection Failed");
      console.log(`Database Error Status: ${error}`);
      process.exit(1);
    });
};
