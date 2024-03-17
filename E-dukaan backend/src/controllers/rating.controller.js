const ratingService = require('../services/rating.service.js')
const createRating  = async (req , res)=>{
    const user = req.user ;
    try{
        const review =  ratingService.createRatings(req.body , user);
        return res.status(201).send(review);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}
const getProductRating  = async (req , res)=>{
    try{
        const reviews =  ratingService.getProductRating(req.params.productId);
        return res.status(201).send(reviews);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}
module.exports = {createRating , getProductRating};
