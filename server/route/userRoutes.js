const express = require("express");
const router = express.Router();
const {
        loginUser,
        registerUser,
        getUser 
} =require('../Controller/userController')
const { protect } = require('../Middlewares/authcheck')

router.post('/register', registerUser )
// router.get('/register', registerUser )
router.post('/login',loginUser )
router.get('/me',getUser )

module.exports = router;
