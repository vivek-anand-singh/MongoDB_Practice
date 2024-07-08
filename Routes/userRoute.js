const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Create
router.post("/",userController.createUser);

// get route
router.get('/', userController.getAllUsers );

// Get user by id
router.get('/:id', userController.getByID );

// Update user
router.put('/:id', userController.updateUser );

/// Delete a user
router.delete('/:id', userController.deleteUser );

module.exports = router;

