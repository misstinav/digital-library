const { default: mongoose } = require("mongoose");
const Book = require('././bookModel');

const searchSchema = new mongoose.Schema({
    start: Number,
    numberFound: Number,
    documents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Book
        }
    ]
});

const SearchResults = mongoose.model('SearchResults', searchSchema);
module.exports = SearchResults;