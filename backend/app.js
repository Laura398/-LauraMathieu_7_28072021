// Imports
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

// Routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

// Express
const app = express();

// Body-parser urlencoded for req.body
app.use(bodyParser.urlencoded({ extended: false }))

// Import db for connection
const db = require('./models');

// CRUD
db.sequelize.sync().then((req) => {
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
});

// Body-parser
app.use(bodyParser.json());

/*Routes path*/
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;