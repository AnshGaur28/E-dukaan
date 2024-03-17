const reviewService = require('../services/review.service.js')
const createReview  = async (req , res)=>{
    const user = req.user ;
    try{
        const review =  reviewService.createReview(req.body , user._id);
        return res.status(201).send(review);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}
const getAllReview  = async (req , res)=>{
    try{
        const reviews =  reviewService.getAllReview(req.params.productId);
        return res.status(201).send(reviews);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports = {createReview , getAllReview};
