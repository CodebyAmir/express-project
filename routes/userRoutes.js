const express = require('express');
const { registerUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const { getMaxListeners } = require('../models/User');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/', auth, getUser);
router.put('/', auth, updateUser);
router.delete('/', auth, deleteUser);

module.exports = router;

