var User = require('../models/user');

module.exports.indexGEt = function(req, res) {
    res.render('login');
}

module.exports.indexPost = function(req, res) {
    console.log(req.body);
    res.render('login', {
        username: req.body.username,
        password: req.body.password
    });
}

module.exports.signupGet = function(req, res) {
    res.render('signup');
}

module.exports.signupPost = function(req, res) {
    
    var newUser = new User( {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err) {
        if(err) {

        } else {
            res.redirect('/login/userlist');
        }
    });

    console.log(newUser);

    res.render('signup');
}

module.exports.userlist = function(req, res) {
    User.find(function(err, result) {
        console.log(results);

        //users: collections of users in the database
        res.render('userlist', { users: results });
    });

}

module.exports.userDelete = function(req, res) {

    User.findOneAndRemove({ username: req.params.username }, function(err) {
        if(err) {
            console.log('error deleting');
        }
        res.redirect('/login/userlist');        
    });
}
