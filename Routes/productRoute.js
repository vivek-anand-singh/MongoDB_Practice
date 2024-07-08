const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/productcontroller');
// Create

router.post("/",ProductController.createProduct);

// get route

router.get('/', ProductController.getAllProduct );

// Get product by id

router.get('/:id', ProductController.getByID );

// Update product

router.put('/:id', ProductController.updateProduct );

/// Delete a Resource

router.delete('/:id', ProductController.deleteProduct );

module.exports = router;