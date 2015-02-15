module.exports = exports = function createdOnPlugin(schema, options) {
    schema.add({createdOn: {type: Date, default: Date.now}});

    schema.pre('init', function (next) {
        this.createdOn = Date.now();
        next();
    });
};

