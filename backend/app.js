// Imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

// Security
const helmet = require('helmet');
const noCache = require('nocache');

// Routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

// Express
const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// Express Rate Limit
const rateLimit = require('express-rate-limit');

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc) :
// (see https://expressjs.com/en/guide/behind-proxies.html)
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, /*15 minutes*/
  max: 500 // limit each IP to 100 requests per windowMs
});

// Apply to all requests
app.use(limiter);

// HTTP request security with Helmet
app.use(helmet());

// No Cache with Helmet
app.use(noCache());

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
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;