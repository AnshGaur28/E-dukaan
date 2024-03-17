const mongoose = require('mongoose')
const cartModel = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "user",
    },
    cartItems :[{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "cartItems",
    }],
    totalItem: {
        type :Number ,
        required : true ,
        default : 0 ,
    },
    totalPrice : {
        type : Number , required: true ,
        default : 0,
    },
    discount : {
        type : Number , required: true ,
        default : 0,
    },
    totalDiscountedPrice : {
        type : Number , required: true ,
        default : 0,
    },
});
const Cart = mongoose.model("cart" , cartModel);
module.exports= Cart;