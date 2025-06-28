const dotenv = require('dotenv');
dotenv.config();

//TODO: later - add in queryType to expand search
exports.searchFeature = async (query) => {
    try {
        const url = `${process.env.SEARCH_API}?q=${query}`;
        const response = await fetch(url);
        
        if (response.ok) {
            return response.data;
        }
        else {
            throw new Error('Failed to return search results');
        }
    } 
    catch (error) {
        console.error("Error fetching third-party book objects: ", error);
        throw error;
    }
};