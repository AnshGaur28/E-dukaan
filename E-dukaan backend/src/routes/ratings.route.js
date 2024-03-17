const ratingController= require('../services/rating.service.js');
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
router.post('/create' , authenticate  , ratingController.createRatings);
router.put('/product/:productId' , authenticate  , ratingController.getProductRating);

module.exports = router ;