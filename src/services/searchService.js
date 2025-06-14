const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

//TODO: do I want to separate the query type? It's not necessary for the search
//but it could add a bit of organization..
exports.searchFeature = async (queryType, query) => {
    try {
        //TODO: build url and add param to it
    } 
    catch (error) {
        console.error("Error fetching third-party book objects");
    }
};