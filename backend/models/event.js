// import mongoose module
const mongoose = require("mongoose");
// create schema 
const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    starting: Date,
    ending: Date,
    time:String,
    address:String,
    price:Number
   
});
// create Model
const event = mongoose.model("Event", eventSchema);
// let exportable
module.exports = event;