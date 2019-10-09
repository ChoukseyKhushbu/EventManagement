const mongoose = require(mongoose);
const Schema = mongoose.Schema;

//Creating Schemas and models

const TimeSchema = new Schema({
    hh: Number,
    mm: Number,
    ss: Number
});
const TimeTableSchema = new Schema({
    id: Number,
    subjectName: String,
    entryTime: [TimeSchema],
    exitTime: [TimeSchema],
    class: String,
    subjectTeacher: String
    
});
const LabSchema = new Schema({
    id: Number,
    LabName: String,
    time: [TimeTableSchema],
    noOfSeats: Number
});

const Lab = mongoose.model('lab', LabSchema);
const Time = mongoose.model('time', TimeSchema);
module.exports = Lab;
module.exports = Time;