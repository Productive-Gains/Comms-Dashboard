var express = require('express')
var request = require('supertest')
var router = require('../../../../server/controllers')
var app = express()

app.use(router)
module.exports = request(app)

//var beforeHooks  = require('./before.js');
//var afterHooks  = require('./after.js');
var World = function World(callback) {
    //beforeHooks;
    callback();
    //afterHooks;
};

module.exports.World = World;
