const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    firstname : {
        type :String ,
        required : true,
    },
    lastname : {
        type : String ,
        required : true ,
    },
    address : {
        type : String ,
        required : true ,
    },
    city : {
        type : String , 
        required : true ,

    },
    state : {
        type : String ,
        required : true ,
    },
    postalcode : {
        type : String,
        required : true ,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    phone_no : {
        type : String ,
        required : true ,
    }
});

const Address = mongoose.model('addresses' , addressSchema);
module.exports =Address;