var Meeting = require('../../../../server/models/meeting');

var beforeHooks = function() {
    this.Before(function(scenerio, callback) {
        console.log('Before');
        callback();
    });
};

module.exports = beforeHooks;