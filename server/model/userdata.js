const { time } = require("console");
const mongoose = require("mongoose");
const userdataschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
  {collection: "UserData" }
);

module.exports = mongoose.model("UserData", userdataschema); 
