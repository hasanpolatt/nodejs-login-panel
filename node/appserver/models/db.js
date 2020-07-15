var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var mongoDB = 'mongodb://localhost/NodeProject';

mongoose.connect('mongoDB', function(err, err) {
    if(err) {
        console.log('mongoose error' + err);
    }
    else {
        console.log('mongoose connected:' + mongoDB);
    }
});