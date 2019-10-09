const mongoose = require(mongoose);
const Schema = mongoose.Schema;

//Creating Schemas and models

const UserIdSchema = new Schema({
    id: Number,
    name: String,
    userid: String,
    paswd: String
});
const UserSchema = new Schema({
    id: Number,
    name: String,
    // userId: [UserIdSchema],
    userid:String,
    branch: String,
    email: String,
    mobileNo: Number,
    studentOrFaculty: Boolean
    
});

const UserId = mongoose.model('userId', UserIdSchema);
const User = mongoose.model('user', UserSchema);
module.exports = UserId;
module.exports = User;