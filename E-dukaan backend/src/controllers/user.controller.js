const userService = require('../services/user.services');
const getUserProfile = async (req, res)=>{
    try{
        const jwt = req.headers.authorization?.split(" ")[1];
        console.log(jwt)
        if(!jwt){
            return res.status(400).send({error :"Not authorized "}) ;
        }
        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).send({user});
    }
    catch(error){
        return res.status(500).send({error : error.message}) ;
    }
}

const getAllUsers = async (req , res)=>{
    try{
        const users = await userService.getAllUsers() ;
        return res.status(200).send({users});
    }catch(error){
        return res.status(500).send({error : error.message});
    }
}

module.exports = {getAllUsers , getUserProfile} ;