module.exports.indexGEt = function(req, res) {
    res.render('login');
}

module.exports.indexPost = function(req, res) {
    console.log(req.body);

    res.render('login', {
        //to show the password on the page
        username: req.body.username,
        password: req.body.password
    });
}