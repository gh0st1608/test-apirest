const express = require('express');
const router = express.Router();

const UserRoute = require('./user.routes');


router.use('/user', UserRoute);

module.exports = router;