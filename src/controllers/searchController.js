const { searchFeature } = require('../services/searchService');

exports.searchOpenLibrary = async (req, res, next) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({
                status: 'fail',
                message: 'Query did not populate correctly'
            });
        }

        const searchResults = await searchFeature(query)

        res.status(200).json({
            status: 'success',
            results: searchResults.numFound,
            data: searchResults.docs
        });
    }
    catch (error) {
        next(error);
    }
};
