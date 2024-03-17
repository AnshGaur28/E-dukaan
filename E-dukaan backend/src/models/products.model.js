const mongoose =  require("mongoose") ;
const productSchema = mongoose.Schema({
    title : {type:  String, required : true},
    description : {type : String, required : true},
    price : {type : Number},
    discountedPrice : {type : Number},
    discountPercent : {type: Number},
    quantity : {type : Number} ,
    brand : {type : String}, 
    imageUrl : {type : String}, 
    sizes : [{name: {type : String} , quantity : {type : Number} }],
    color : {type : String},
    ratings : [{type : mongoose.Schema.Types.ObjectId , ref : "ratings"}],
    reviews : [{type : mongoose.Schema.Types.ObjectId , ref : "reviews"}],
    category : {
        type:  mongoose.Schema.Types.ObjectId ,
        ref : "categories",
    },
    createdAt : {
        type : Date ,
        default : Date.now(),
    },
    numRatings : {
        type : Number ,
        default : 0,
    }
});

const Product = mongoose.model("products" , productSchema);
module.exports = {Product};