// // Import necessary modules
// const express = require("express");
// const router = express.Router();
// const UserData = require("../model/userdata");

// // Define a route handler for saving user data
// router.get("/login", async (req, res) => {
//   try {
//     // Fetch all user data from the database
//     const userData = await UserData.find();

//     // Send a success response with the user data
//     res.status(200).json(userData);
//   } catch (error) {
//     // Handle any errors that occur during database interaction
//     console.error("Error fetching user data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// } );
// router.post('/', async (req, res) => {
//   try {
//     // Extract data from request body
//     const { uname, email, password, follower, following } = req.body;

//     // Create a new instance of userdata model with extracted data
//     const newUser = new UserData({
//       uname,
//       email,
//       password,
//       follower,
//       following
//     });

//     // Save the new user data to the database
//     const savedUser = await newUser.save();

//     // Send a success response with the saved user data
//     res.status(201).json(savedUser);
//   } catch (error) {
//     // Handle any errors that occur during database interaction
//     console.error("Error saving user data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;
