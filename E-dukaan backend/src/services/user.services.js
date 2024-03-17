const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/user.model");
const bcrypt = require('bcrypt');


const createUser = async (userData)=>{
    try{
        let {firstName , lastName , email ,password} = userData ;
        const userExist = await User.findOne({email});
        if(userExist){
            throw new Error("user already exists with the given email:",email);
        }
        password = await bcrypt.hash(password , 8);
        const user = await User.create({firstName,lastName,email,password});
        // create method creates a new instance with the given data as well as saves this to the database..
        console.log('user created with data:',userData);
        return user;
    }
    catch(error){
        throw new Error(error.message);
    }
}
const getUserById = async (userId)=>{
    try{
        const user = await User.findById(userId)
        // .populate('address');
        if(!user){
            throw new Error("No such user found with id:",userId);
        }
        return user ;
    }
    catch(error){
        throw new Error(error.message);
    }
}

const getAllUsers = ()=>{
    try{
        const user = User.find();
        return user ;
    }
    catch(error){
        throw new Error(error.message);
    }
}

const getUserByEmail = async (email)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error("No such user found with id:",userId);
        }
        return user ;
    }
    catch(error){
        throw new Error(error.message);
    }
}

const getUserProfileByToken = (token)=>{
    try{

    
        const userId = getUserIdFromToken(token);
        const user =  getUserById(userId);
        if(!user){
            throw new Error("No user can be found with the given token",token);
        }
        return user ;
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createUser , getUserByEmail ,getUserById , getUserProfileByToken , getAllUsers};