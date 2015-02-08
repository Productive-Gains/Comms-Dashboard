var db = require('../../db');
var Schema = db.Schema;

var attendeeSchema = new Schema({
    email: String
});

var meetingSchema = new Schema({
    organizerEmail: {type: String, required: true},
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    attendees: {type: Array, ref: attendeeSchema, required: true}
});

var Meeting = db.model('Meeting', meetingSchema);

module.exports = Meeting;
