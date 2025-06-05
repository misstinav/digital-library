const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`Environment running: ${process.env.NODE_ENV}`);
});
