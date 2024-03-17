const mongoose = require('mongoose')
const cartItemSchema = mongoose.Schema({
    cart : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true ,
        ref : "cart",
    },
    product : {
        type : mongoose.Schema.Types.ObjectId ,
        ref :"products",
        required : true ,
    },
    size : {
        type : String ,
        required : true ,
    },
    quantity : {
        type : Number ,
        required : true ,
        default : 0 ,
    } ,
    price : {
        type : Number ,
        required : true ,
    },
    userId : {
        type :mongoose.Schema.Types.ObjectId ,
        required : true ,
        ref : "users",
    },
    discountedPrice : {
        type : Number ,
        required : true ,
    }
});

const CartItems = mongoose.model("cartItems" , cartItemSchema);
module.exports = CartItems;