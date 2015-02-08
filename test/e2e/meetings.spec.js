//var db = require('../../db')
var Meeting = require('../../server/models/meeting')
var chai = require('chai')
chai.use( require('chai-as-promised'))
var expect = chai.expect

describe('controllers.api.meeting', function () {
    beforeEach(function (done) {
        Meeting.remove({}, done)
    });
    describe('GET /api/meeting', function () {
        beforeEach(function (done) {
            var meetings = [
                {
                    organizerEmail: 'organizer1@gmail.com', 
                    startDateTime: '2015-01-23T18:25:43.511Z',
                    endDateTime: '2015-01-23T19:25:43.511Z',
                    attendees: [{email: "attendee1@gmail.com", email: "attendee2@gmail.com", email: "attendee3@gmail.com"}]
                },
                {
                    organizerEmail: 'organizer2@gmail.com',
                    startDateTime: '2015-01-24T18:25:43.511Z',
                    endDateTime: '2015-01-24T19:25:43.511Z',
                    attendees: [{email: "attendee4@gmail.com", email: "attendee5@gmail.com", email: "attendee6@gmail.com"}]
                },
                {
                    organizerEmail: 'organizer3@gmail.com',
                    startDateTime: '2015-01-25T18:25:43.511Z',
                    endDateTime: '2015-01-25T19:25:43.511Z',
                    attendees: [{email: "attendee7@gmail.com", email: "attendee8@gmail.com", email: "attendee9@gmail.com"}]
                }
            ];
            Meeting.create(meetings, done);
        });
        it('has 3 meetings', function (done) {
                api.get('/api/meetings').expect(200).expect(function (response) {
                    expect(response.body).to.have.length(3)
                }).end(done)

            }
        );
    })
    describe('POST /api/meetings', function () {
        beforeEach(function (done) {
            var meetings = [
                {
                    organizerEmail: 'organizer1@gmail.com',
                    startDateTime: '2015-01-23T18:25:43.511Z',
                    endDateTime: '2015-01-23T19:25:43.511Z',
                    attendees: [{
                        email: "attendee1@gmail.com",
                        email: "attendee2@gmail.com",
                        email: "attendee3@gmail.com"
                    }]
                }
            ];

            Meeting.create(meetings, done);
        });
        it('added 1 new meeting', function (done) {
            Meeting.findOne(function (err, post) {
                expect(meeting.body.organizerEmail).to.equal('organizer1@gmail.com')
                done(err)
            });
        });
    });
});









