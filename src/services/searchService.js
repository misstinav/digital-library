const dotenv = require('dotenv');
dotenv.config();

//TODO: later - add in queryType to expand search
exports.searchFeature = async (query) => {
    try {
        const url = `${process.env.SEARCH_API}?q=${query}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': process.env.USER_AGENT,
                'Accept': 'application/json'
            }
        });
        const searchObj = await response.json();

        if (searchObj) {
            return searchObj;
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