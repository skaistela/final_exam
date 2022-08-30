const Event = require('../models/EventUser');

const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async(req,res) => {
    const events = await Event.find({});
    res.status(200).json(events)
});

module.exports = getUsers