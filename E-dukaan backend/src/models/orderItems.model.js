const mongoose = require("mongoose");
const orderItemsSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "products" ,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "users" ,
    },
    size : {
        type : String ,
        required : true ,
    },
    quantity : {
        type : Number ,
        required : true ,
    },
    price :{ 
        type : Number ,
        required : true ,
    }
});

const OrderItems = mongoose.model("orderItems", orderItemsSchema);
module.exports= OrderItems;