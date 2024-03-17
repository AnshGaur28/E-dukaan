const authController = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router(); 
router.post("/signin" , authController.login);
router.post("/signup" , authController.register);

module.exports =router ;