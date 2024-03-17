const orderController = require("../controllers/order.controller.js");
const express = require('express');
const router = express.Router(); 
const authenticate = require('../middleware/authenticate.js')

router.post('/' , authenticate , orderController.createOrder);
router.get('/:id' , authenticate , orderController.findOrderById);
router.get('/history' , authenticate , orderController.orderHistory);

module.exports = router ;
