const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.showLoginPage);
router.post('/login', userController.login);
router.get('/register', userController.showRegisterPage);
router.post('/register', userController.register);

module.exports = router;