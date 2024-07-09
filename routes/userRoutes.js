const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para obter informações do usuário
router.get('/:username', userController.getUser);

module.exports = router;
