const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const port= 5000;
app.use(express.json());
app.use(express.static("public"));
app.use(cors());


// import 
const userRoute = require('./route/user');
const uploadRoute = require('./route/uploads');


//api
app.use('/', userRoute);
app.use('/', uploadRoute);

// setting mongoose connection
const uri = "mongodb+srv://radhey:Dholakpur098@cluster0.e3dfdbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


 mongoose.connect(uri).then(() =>{
    console.log('Database connected');
 }).catch((e)=>{
    console.log(e)
 })
//  const db = mongoose.connection;
//  db.on('connected', () => {
//    console.log('Connected to MongoDB Atlas');
//  });
 
//  db.on('error', (err) => {
//    console.error('Error connecting to MongoDB Atlas:', err);
//  });
 
//  db.on('disconnected', () => {
//    console.log('Disconnected from MongoDB Atlas');
//  });

 app.get("/", async (req, res) => {
    res.send("Success !!!!!!");
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

