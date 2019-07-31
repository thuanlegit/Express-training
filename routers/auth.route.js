var express = require('express');

var controller = require('../controllers/auth.controller');

var validate = require('../validate/auth.validate');

var router = express.Router();

router.get('/', controller.index);

router.post('/login', validate.postLogin, controller.postLogin);

module.exports = router;