var express = require('express');

var router = express.Router();

var ctrlIndex = require('../controller/indexCont');

router.get('/', ctrlIndex.index);

module.exports = router;