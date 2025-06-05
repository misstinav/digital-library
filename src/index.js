const express = require('express');
const searchRoutes = require('./routes/searchRoutes');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();

//register routes
app.use('/api/v1/search', searchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`Environment running: ${process.env.NODE_ENV}`);
});
