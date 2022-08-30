const EventUser = require('../models/EventUser');
const asyncHandler = require('express-async-handler');

const setRegister = asyncHandler(async(req,res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error ('Please add a text field');
    }
    const eventUser = await EventUser.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        user: req.body.user
    })
    res.status(200).json(eventUser)
});

module.exports = setRegister