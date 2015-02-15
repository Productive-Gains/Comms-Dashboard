var db = require('../../db');
var Schema = db.Schema;
var modifiedOn = require('./plugins/modifiedOn');
var createdOn = require('./plugins/createdOn');

var attendeeSchema = new Schema({
    email: String
});

var meetingSchema = new Schema({
    meetingId: {type: String, required: true},
    organizerEmail: {type: String, required: true},
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    attendees: {type: Array, ref: attendeeSchema, required: true}
});

meetingSchema.plugin(modifiedOn, {});
meetingSchema.plugin(createdOn, {});

var Meeting = db.model('Meeting', meetingSchema);

module.exports = Meeting;
