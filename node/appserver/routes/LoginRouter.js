var express = require('express');

var router = express.Router();

var ctrlLogin = require('../controller/LoginCont');

router.get('/', ctrlLogin.indexGEt);
router.post('/', ctrlLogin.indexPost);
router.get('/signup', ctrlLogin.signupGet);
router.post('/signup',ctrlLogin.signupPost);
router.get('/userlist', ctrlLogin.userlist);
router.get('/userdelete/:username', ctrlLogin.userDelete);

module.exports = router;
