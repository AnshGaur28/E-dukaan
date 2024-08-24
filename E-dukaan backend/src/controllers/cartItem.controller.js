const cartItemService = require('../services/cartItem.service.js');
const updateCartItem = async(req , res)=>{
    const user = req.user 
    try{
        console.log(user);
        const updatedCartItem = await cartItemService.updateCartItem(user._id , req.params.id , req.body);
        return res.status(200).send(updatedCartItem);
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}

const removeCartItem =  async(req, res)=>{
    const user = req.user ;
    // console.log(user._id , req.params.id)
    console.log("Inside remove cart item" , user);
    try{
        await cartItemService.removeCartItem(user._id, req.params.id);
        return res.status(200).send({message : "CartItem removed successfully"});
    }
    catch(error){
        return res.status(500).send({error : error.message});
    }

};

module.exports = {removeCartItem , updateCartItem};