const reviewController = require('../services/review.service.js');
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
router.post('/create' , authenticate  , reviewController.createReview);
router.get('/product/:productId' , authenticate  , reviewController.getAllReview);

module.exports = router ;