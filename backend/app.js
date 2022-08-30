require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/db')
connectDB();

const User = require('./models/User');


const app = express();
app.use(express.json());

const registerUser = require('./controllers/userControler');
const loginUser = require('./controllers/loginController');
const getUsers = require('./controllers/getUsers');
const setRegister = require('./controllers/register');

app.post('/api/user', registerUser);
app.post('/api/user/login', loginUser);
app.post('/api/events', setRegister);
app.get('/api/events', getUsers);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})