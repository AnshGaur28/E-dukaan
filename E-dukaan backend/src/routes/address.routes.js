const express = require('express');
const router = express.Router();
const {getAddressById} = require('../controllers/address.controller.js')
const authenticate = require('../middleware/authenticate.js');
router.get('/:addressId' , authenticate , getAddressById);
module.exports = router ; 