const express = require('express');
const searchRoutes = require('./routes/searchRoutes');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();
//TODO: add logger

//register routes
app.use('/api/v1/search', searchRoutes);

module.exports = app;
