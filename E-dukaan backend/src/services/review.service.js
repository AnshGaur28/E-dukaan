const { Product } = require('../models/products.model.js');
const Review = require('../models/reviews.model.js');
const productService = require('../services/product.service.js');

async function createReview(reqData , user){
    try{
        const product = await Product.findById(reqData.productId);
        const review = new Review({
            user : user._id ,
            product : product._id ,
            review : reqData.review,
            createdAt : new Date(),

        })
        await product.save();
        return await review.save();
    }catch(error){
        throw new Error(error.message);
    }
}

async function getAllReview(productId){
    const product = await productService.findProductById(productId);
    return await Review.find({product : product._id}).populate("users");

}

module.exports = {getAllReview , createReview};