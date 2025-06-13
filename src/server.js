const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./index');

//TODO: create and add db connection


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(`Environment running: ${process.env.NODE_ENV}`);
});