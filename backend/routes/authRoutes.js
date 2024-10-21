const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/api/register', (req, res, next) => {
  console.log('Register route hit');
  registerUser(req, res, next);
});

router.post('/api/login', (req, res, next) => {
  console.log('Login route hit');
  loginUser(req, res, next);
});

module.exports = router;