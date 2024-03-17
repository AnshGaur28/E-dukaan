const express = require('express');
const router = express.Router();
const orderController = require('../controllers/adminOrder.controller.js');
const authenticate = require('../middleware/authenticate.js');
router.get('/' , authenticate , orderController.getAllOrders);
router.put('/:orderId/confirmed' , orderController.confirmedOrders);
router.put('/:orderId/ship' , orderController.shipOrder);
router.put('/:orderId/deliver' , orderController.DeliverOrder);
router.put('/:orderId/cancel' , orderController.cancelledOrders);
router.put('/:orderId/delete' , orderController.deleteOrders);

module.exports = router ;