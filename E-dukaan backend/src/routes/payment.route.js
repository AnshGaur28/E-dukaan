const { createPaymentLink, updatePaymentInfo } = require('../controllers/payment.controller.js');
const authenticate=  require('../middleware/authenticate.js') ;
const express = require('express');
const router = express.Router();

router.post('/:id' , authenticate ,  createPaymentLink);
router.get('/' , authenticate ,updatePaymentInfo);
module.exports = router ; 