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
        console.log(user)
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
// route        POST auth/login
const loginUser  = asyncHandler(async(req, res) =>{
     const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})
// @desc        Register a user
// @access      Public
// route        GET auth/me 
const getUser = asyncHandler(async(req, res) =>{
    res.status(200).json(req.user)})

const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: '28d',
        })
      }
      
 module.exports ={   loginUser,
    getUser ,registerUser}