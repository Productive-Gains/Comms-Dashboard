module.exports = exports = function modifiedOnPlugin(schema, options) {
    schema.add({modifiedOn: {type: Date, default: Date.now}});
    
    schema.pre('save', function (next) {
        this.modifiedOn = Date.now();
        next();
    });
    
    //if (options && options.index) {
    //    schema.path('modifiedOn').index(options.index);
    //}
};

