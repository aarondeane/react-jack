const express = require('express');
const models = require('./models');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('../services/auth');
const MongoStore = require('connect-mongo')(session);

// Create a new Express application
const app = express();
app.use(express.static('public'))

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://localhost/react-jack';

// mongoose.connection
//     .once('open', () => console.log('Connected to MongoDB.'))
//     .on('error', error => console.log('Error connecting to MongoDB:', error));

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize());
app.use(passport.session());

app.listen(4000, () => {
  console.log('Listening');
});
