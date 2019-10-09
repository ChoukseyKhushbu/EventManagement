const mongoose = require(mongoose);
const Schema = mongoose.Schema;
const User = require('User');
const Time = require('Time');
const Lab = require('Lab');
//Creating Schemas and models

const EventSchema = new Schema({
    id: Number,
    user: [User],
    eventName: String,
    startTime: [Time],
    endTime: [Time],
    date: [{dd: Number},{mm: Number},{yy: Number}],
    noOfParticipants: Number,
    lab: [ Lab],
    cheifGuest: [User],
    coordinator:[User],
    volunteer:[User],

});

const Event = mongoose.model('event', Event);
module.exports = Event;