const { default: mongoose } = require("mongoose");

const searchSchema = new mongoose.Schema({
    start: Number,
    numberFound: Number,
    documents: [{
        //TODO: finish building the book object
        //TODO: build a bookModel that can replace this section of code
        title: String,
        author: String
    }]
});

const SearchResults = mongoose.model('SearchResults', searchSchema);
module.exports = SearchResults;