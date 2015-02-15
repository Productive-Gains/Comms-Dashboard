var Meeting = require('../../models/meeting');
var express = require('express');
var router = express.Router();
//var websockets = require('../../../websockets')
//var pubsub = require('../../../pubsub');

//var sub = false;

router.post('/', function (req, res, next) {
    var meeting = new Meeting(
        {
            meetingId: req.body.meetingId,
            organizerEmail: req.body.organizerEmail,
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime,
            attendees: req.body.attendees
        }
    )
    meeting.save(function (err, meeting) {
        if (err) {
            console.log("error saving " + err);
            return next(err)
        }
        //websockets.broadcast('new_post', post)
// called after a post in created in MongoDB
// the subscribe listens to a new_post event at any time
// subscribe takes a callback that will use our existing websockets.broadcast
//        pubsub.publish('new_post', post);
        // function to send a message to the clients on the current process

        res.status(201).json(meeting)
    })
});

router.get('/', function (req, res, next) {
    Meeting.find(function (err, meetings) {
        if (err) {
            return next(err)
        }
        //if (!sub) {
        //    pubsub.subscribe('new_post', function (post) {
        //        console.log("Posted")
        //        websockets.broadcast('new_post', post)
        //    })
        //    sub = true;
        //}

        //console.log("Meeting are " + meetings);
        res.status(200).json(meetings)
    });
    //    Post.find(function (err, posts) {
    //    if (err) {
    //        return next(err);
    //    }
    //    res.json(posts);
    //})
});

module.exports = router;
