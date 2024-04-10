const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const port= 5000;
require("dotenv").config()
const cors = require('cors');
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// import 
const uploadRoute = require('./route/uploads');
//api
app.use('/', uploadRoute);
app.use('/auth', require('./route/userRoutes') );

// setting mongoose connection
const uri = process.env.MONGO_URI ;
 mongoose.connect(uri).then(() =>{
    console.log('Database connected');
 }).catch((e)=>{
    console.log(e)
 })

 app.get("/", async (req, res) => {
    res.send("Success !!!!!!");
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

