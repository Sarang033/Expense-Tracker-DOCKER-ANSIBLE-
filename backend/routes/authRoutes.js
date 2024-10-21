const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', (req, res, next) => {
  console.log('Register route hit');
  registerUser(req, res, next);
});

router.post('/login', (req, res, next) => {
  console.log('Login route hit');
  loginUser(req, res, next);
});

module.exports = router;