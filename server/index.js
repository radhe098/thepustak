const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const port= 5000;
require("dotenv").config()
app.use(express.json());
app.use(express.static("public"));
app.use(cors());


app.post('/login',(req,res)=>{
   const username = req.body.username;
   const user ={name:username}
   const AccessToken=jwt.sign(user,process.env.ACCESS_TOKEN)
   res.json({AccessToken:AccessToken})
})

// import 
const userRoute = require('./route/user');
const uploadRoute = require('./route/uploads');


//api
app.use('/', userRoute);
app.use('/', uploadRoute);
app.use('/api/user', require('./route/userRoutes') );
// setting mongoose connection
// const uri = "mongodb+srv://radhey:Dholakpur098@cluster0.e3dfdbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb://127.0.0.1:27017"


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

