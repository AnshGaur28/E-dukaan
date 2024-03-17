const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "user" ,
    },
    orderItems : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "orderItems" ,
    }],
    orderDate : {
        type : Date ,
        // required : true ,
        default : new Date(),
    },
    deliveryDate : {
        type : Date ,
    },
    shippingAddress :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "addresses"
    },
    paymentDetails : {
        paymentId : {type : String},
        payementStatus : {type : String , default : "PENDING"},
        transactionId : {type : String},
        paymentMethod : {type : String},
    },
    totalPrice : {
        type: Number ,
        required: true ,
    },
    totalDiscountedPrice : {
        type: Number ,
        required: true ,
    },
    discount : {
        type: Number ,
        // required: true ,
    },
    orderStatus : {
        type: String ,
        required: true ,
        default : "PENDING",
    },
    totalItem : {
        type: Number ,
        required: true ,
    },
    createdAt : {
        type: Date ,
        default : Date.now(),
    }
});

const Order = mongoose.model("orders", orderSchema);
module.exports= {Order};