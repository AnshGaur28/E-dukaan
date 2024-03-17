const productController = require("../controllers/product.controller.js");
const express = require('express');
const router = express.Router(); 
const authenticate = require('../middleware/authenticate.js');
router.post('/' , authenticate , productController.createProduct);
router.post('/multiple' , authenticate , productController.createMultipleProducts);
router.delete('/:id' , authenticate , productController.deleteProduct);
router.put('/' , authenticate ,  productController.updateProduct);
router.put('/' , authenticate ,  productController.updateProduct);

module.exports = router ;