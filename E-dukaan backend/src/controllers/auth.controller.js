const userService = require('../services/user.services');
const jwtProvider = require('../config/jwtProvider');
const bcrypt = require("bcrypt");
const cartService = require('../services/cart.service');
const register = async (req , res)=>{
    try{
        const user = await userService.createUser(req.body) ;
        // console.log(user._id);
        const jwt = await jwtProvider.generateToken(user._id);
        await cartService.createCart(user);
        return res.status(200).send({jwt , message : "User created successfully"});
    }
    catch(error){
        throw new Error(error.message);
    }
}

const login = async (req , res)=>{
    const {email , password} = req.body ;
    try{
        const user = await userService.getUserByEmail(email);
        // console.log(user);
        if(!user){
            return res.status(404).send({message : "No user with email:",email});
        }
        // console.log(password , user.password);
        const isPasswordValid = bcrypt.compare(password , user.password) ;
        if(!isPasswordValid){
            return res.status(401).send({message : "Password is invalid"})
        }

        const jwt = jwtProvider.generateToken(user._id);
        // console.log(req.headers);
        return res.status(200).send({message : "login success" , jwt});
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {login , register};