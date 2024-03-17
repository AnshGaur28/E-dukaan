const express = require('express');
const authenticate = require('../middleware/authenticate.js');
const router = express.Router();

const cartController = require('../controllers/cart.controller');

router.get('/' , authenticate , cartController.findUserCart);
router.put('/add' , authenticate , cartController.addItemToCart);
module.exports = router ;
