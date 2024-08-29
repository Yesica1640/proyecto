// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../src/controllers/userController');

// Ruta para el registro de usuario
router.post('/register', userController.registerUser);

module.exports = router;