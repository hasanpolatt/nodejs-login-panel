
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//creating express
var exp = express();
var layouts = require('express-ejs-layouts');


//app.js
exp.set('view engine', 'ejs');
exp.set('views', path.join(__dirname, '/appserver/views'));

exp.use(bodyParser.urlencoded({ extended: false }));
exp.use(bodyParser.json());


exp.use(layouts);
//public folder is being accessed
exp.use('/public', express.static(path.join(__dirname, 'public')));

exp.use(function(req, res, next) {
    console.log('url...' + req.url);
    console.log('date...' + Date.now());
    next();
});

//adding routers
require('./appserver/routes/Manager')(exp);

exp.listen(8000);

