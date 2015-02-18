var Meeting = require('../../../../server/models/meeting');
var chai = require('chai');
var expect = chai.expect;
var request = require('request');

var meetings_statistics_steps = function() {
    var afters = 0;
    var befores = 0;
    
    var meetingData = null;
    var responseCode = 0;

    this.World = require("../support/world.js").World;
    
    this.Before(function(scenario, callback) {
        befores++;
        console.log('Before (' + befores + ') : ' + scenario.getName());
        Meeting.remove({}, function(err) {
            if (err)
                console.log(err);

            callback();
        });

        meetingData = null;
    });

    this.After(function(scenario, callback) {
        afters++;
        console.log('After (' + afters + ') : ' + scenario.getName());
        callback();
    });

    this.Given(/^a client has meeting data with this specific field (.*) and value (.*)$/, function (field, value, callback) {
        meetingData = {
            meetingId: '1234',
            organizerEmail: 'organizer1@gmail.com',
            startDateTime: '2015-01-23T18:25:43.511Z',
            endDateTime: '2015-01-23T19:25:43.511Z',
            attendees: [{email: "attendee1@gmail.com", email: "attendee2@gmail.com", email: "attendee3@gmail.com"}]
        };
        
        meetingData[field] = value;

        callback();
    });

    this.When(/^the client sends the meeting data$/, function (callback) {
        console.log("Sending meeting data");
            var options = {
                method: 'POST',
                url: 'http://localhost:3001/api/meetings',
                headers: {
                    'Accept': 'application/json'
                },
                body: meetingData,
                json: true
            };

            function respCallback(error, response, body) {
                if (!error && (response.statusCode == 201 || response.statusCode == 200)) {
                    responseCode = response.statusCode;
                    console.log(responseCode);
                }

                callback();
            }
        
            request(options, respCallback);
    });

    this.Then(/^the meeting data should be saved in the system$/, function (callback) {
        callback();
    });

    this.Then(/^the meeting data should have this specific field (.*) and value (.*) saved in the system$/, function (field, value, callback) {
        Meeting.find(function(error, docs) {
            if ( error || !docs ) {
                console.log("error " + error);
            }
            else {
                expect(docs).to.have.length(1);
                expect(docs[0][field]).to.equal(value);
            }

            callback();
        });
    });

    this.Then(/^the client gets a success response$/, function (callback) {
        expect(responseCode).to.be.greaterThan(199).and.lessThan(300);
        callback();
    });

    this.Then(/^the system sends an error message (.*) to the client$/, function (error, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^the system logs the error$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^the system should not save the meeting data$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
};

module.exports = meetings_statistics_steps;