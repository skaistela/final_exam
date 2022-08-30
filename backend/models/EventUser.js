const mongoose = require('mongoose');

const EventUser = mongoose.model('Event', new mongoose.Schema({
        name:{
            type: String,
            trim: true.valueOf,
            required: [true, "Please add name, last name"]
        },
        email:{
            type: String,
            required: [true, "Please add email"]
        },
        age:{
            type: String,
            required: [true, 'Please add age']
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createAt:{
            type: Date,
            default: Date.now
        }
}));

module.exports = EventUser