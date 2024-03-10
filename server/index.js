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



 mongoose.connect('mongodb://127.0.0.1:27017/The_Pustak_').then(() =>{
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

