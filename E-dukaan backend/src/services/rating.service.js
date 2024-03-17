const { Product } = require("../models/products.model");
const Rating = require("../models/ratings.model");


const getProductRating =  async(productId)=>{
    return await Rating.find({product : productId});
}

const createRatings =  async(req , user)=>{
    const product =  Product.findById({product : req.productId});
    const rating = new Review({
        product : product._id ,
        user : user._id ,
        rating : req.rating ,
        createdAT : new Date() ,
    })

    return await rating.save();
}

module.exports = {createRatings , getProductRating};