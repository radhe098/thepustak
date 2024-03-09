const mongoose = require("mongoose");
const userdataschema = new mongoose.Schema(
  {
    uname: String,
    email: String,
    password: String,
    follower:Number,
    following:Number
  },
  { collection: "UserData" }
);

module.exports = mongoose.model("UserData", userdataschema); 
