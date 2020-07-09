var express = require('express');

var router = express.Router();

var ctrlLogin = require('../controller/LoginCont');

router.get('/', ctrlLogin.indexGEt);
router.post('/', ctrlLogin.indexPost);

module.exports = router;
