const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.all('*', authController.verifyUser);
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;