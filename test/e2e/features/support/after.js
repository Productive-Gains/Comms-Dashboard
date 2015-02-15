var afterHooks = function() {
    this.After(function(scenario, callback) {
        console.log('After');
        callback();
    });
};

module.exports = afterHooks;