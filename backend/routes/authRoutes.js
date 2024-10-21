
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/api/auth/register', registerUser);
router.post('api/auth/login', loginUser);

module.exports = router;