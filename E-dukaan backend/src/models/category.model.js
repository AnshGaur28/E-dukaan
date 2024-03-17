const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name :{
        type : String ,
        required : true ,
    },
    parentCategory : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : "categories",
    },
    level : {
        type : Number ,
        required : true ,
    }
});
const Categories = mongoose.model("categories" , categorySchema);
module.exports= {Categories};