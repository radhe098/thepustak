
const express = require("express");
const router = express.Router();
const {loginUser,
        registerUser,
        getUser
} =require('../Controller/userController')


router.post('/', registerUser )
router.post('/login',loginUser )
router.get('/me',getUser )

module.exports = router;
