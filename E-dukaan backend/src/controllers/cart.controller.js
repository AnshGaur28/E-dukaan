const cartService = require('../services/cart.service.js');
const findUserCart = async(req , res)=>{
    // middleware sets user in req ....
    const user  = req.user ; 
    // console.log(user._id);
    try{
        const cart =  await cartService.findUserCart(user._id);
        return res.status(200).send(cart) ;
    }
    catch(error){
        return res.status(500).send({message : "No such user was found" , error : error.message});
    }
}

const addItemToCart = async(req , res)=>{
    const user  = req.user  ;
    // console.log(user);
    try{
        const cartItem = await cartService.addCartItem(user._id , req.body);
        return res.status(200).send(cartItem);
    }
    catch(error){
        return res.status(500).send({error : error.message});
    }
}

module.exports = {addItemToCart , findUserCart};