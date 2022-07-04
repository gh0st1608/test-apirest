const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/ping', UserController.getTest);

router.post('/', UserController.getUser);

module.exports = router;