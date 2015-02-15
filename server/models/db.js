var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pgdash', function () {
    console.log('mongodb connected');
});
module.exports = mongoose;

