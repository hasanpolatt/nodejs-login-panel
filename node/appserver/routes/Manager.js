var routeLogin = require('./LoginRouter');
var routeIndex = require('./IndexRouter');


module.exports = function(exp) {
    exp.use('/', routeIndex);
    exp.use('/login', routeLogin);    
}