const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userdata");
// @desc        Register a user
// @access      Public
// route        POST api/user
const registerUser  = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body;
    if (!name){
        res.status(400)
        throw new Error('error in name')
    }else if (!email){
        res.status(400)
        throw new Error('error in email')
    }else if (!password){
        res.status(400)
        throw new Error('error in pass')
    }
     

    // if (! password){
    //     res.status(400)
    //     throw new Error('enter pass')
    // }
    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400).json({ error: 'User already exists' });
        return;
    }
   

    // hashing password

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
    // create user

    const user = await User.create({
        name:name, email:email, password:hashedPass
    })

    if (user){
        res.json({
            id:user.id,
            name:user.name,
            email:user.email
        })
        console.log("successfully saved to DB")
    }
    else{
        res.status(400)
        throw new Error("failed to store")
    }
    // res.json({message:'Register a user'})
})




// @desc        authenticate a user
// @access      Public
// route        POST api/user/login
// const loginUser  = asyncHandler(async(req, res) =>{
    // res.json({message:'login a user'})
// })
// @desc        Register a user
// @access      Public
// route        GET api/user/me
// const getUser = asyncHandler(async(req, res) =>{
//     res.json({message:' user data'})
// })


 module.exports ={  registerUser}