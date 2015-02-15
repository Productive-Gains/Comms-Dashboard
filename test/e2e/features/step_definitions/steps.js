var db = require('../../../../server/models/db')
var User = require('../../../../server/models/user')
var bcrypt = require('bcrypt')
var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised);
var chaiJq = require("chai-jq");
chai.use(chaiJq);

var expect = chai.expect

var username = 'user';
var pass = 'pass'

var steps = function() {
    this.Given(/^I go to "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        //callback.pending();
        browser.get("http://localhost:3001/");
        callback()
    });

    this.Then(/^the selected tab should be "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        //callback.pending();
        var elem = element(by.css("li[class='active'] a"));
        expect(elem.getText()).to.eventually.be.equal(arg1).notify(callback);

        //expect($("li[class='active'] a")).to.have.text(arg1)
        //callback();
            //.and.notify(callback);

        //elem.getText().then(function(text) {
        //    expect(text).to.equal(arg1)
        //        //.and.notify(callback);
        //    callback();
        //});

        //.and.notify(callback);
    });

    this.Then(/^there should be a chart called "([^"]*)" on the page$/, function (arg1, callback) {
        //var $elem = $("div.panel-heading:contains('" + arg1 + "')");
        //var $elem = $(selector);

        var elem = element(by.cssContainingText("div.panel-heading", arg1));

        //expect($elem.text()))
        //expect(elem).to.exist
        //callback();
        //expect(elem.getText()).to.eventually.be.equal(arg1).notify(callback);

        //expect($elem).to.have.$text(arg1);
        callback();

    });

    this.Then(/^there should be a statistic called "([^"]*)" on the page$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        var elem = element(by.cssContainingText("span[class*='label label-primary ']", arg1));
        //var $elem = $("span:contains('" + arg1 + "')");

        //expect($elem.getText()).to.eventually.be.equal(arg1).notify(callback);
        //var matchPattern = new RegExp("/^" + arg1 + ".*/");
        var matchPattern = new RegExp(arg1 + ".*");
        //expect(elem.getText()).to.eventually.to.match(matchPattern).notify(callback);
        //expect(statSpan.text()).to.equal(arg1)
        callback();
    });



    this.Given(/^I have a valid and active account$/, function (next) {
        db.connection.db.dropDatabase()
        var user = new User({username: username})
        bcrypt.hash(pass, 10, function (err, hash) {
            if (err) {
                return next(err)
            }
            user.password = hash

            user.save(function (err) {
                if (err) {
                    return next(err)
                }
                next();
            })
        })

    });

    this.Given(/^I am logged out of the system$/, function (next) {
        browser.get('http://localhost:3001') // click 'login'
        //expect(browser.getCurrentUrl()).to.eventually.be('http://localhost:3001');
        expect(element(by.css('nav .login')).isPresent()).to.eventually.be.true.and.notify(next);
    });

    this.Given(/^I request to authenticate myself$/, function (next) {
        element(by.css('nav .login')).click().then(next); // fill out and submit registration form ' +
    });

    this.When(/^I provide my credentials$/, function (next) {
        element(by.model('username')).sendKeys(username)
        element(by.model('password')).sendKeys(pass)
        element(by.css('form .btn')).click().then(next) // submit a new post on the posts page
    });

    this.Then(/^I should have access to my account$/, function (next) {
        //expect(element(by.css('h1')).getText().isEqual('Welcome to Your Meeting Areas')).to.eventually.be.true.and.notify(next);
        next.pending();
    });

    this.Given(/^I have an invalid account$/, function (next) {
        //       db.connection.db.dropDatabase()
        next.pending();
    });

    this.Then(/^I should be denied access to my account$/, function (next) {
        expect(element(by.css('nav .logout')).isPresent()).to.eventually.be.true.and.notify(next);
    });
};

module.exports = steps;