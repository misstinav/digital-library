const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    key: String,
    cover: Number,
    hasFullText: Boolean,
    title: String,
    author: [String]
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;