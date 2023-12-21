// import mongoose module
const mongoose = require("mongoose");
// create schema 
const courseSchema = mongoose.Schema({
    courseName: String,
    price: Number,
    duration: String,
    teacherId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    places: Number,
    description: String,
    avatar: String

});
// create Model
const course = mongoose.model("Course", courseSchema);
// let exportable
module.exports = course;
