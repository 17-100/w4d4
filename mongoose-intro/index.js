


const mongoose = require('mongoose');

/*
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        maxLength: 50
    },
    pages: {
        type: Number,
        max: 5000
    },
    inStock: {
        type: Boolean,
        default: true
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Classic', 'History']
    }
})
*/

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    released: Date,
    inStock: Boolean,
    genre: String
});

const Book = mongoose.model('Book', bookSchema);
// 'mongodb://localhost/<name of the database>'
mongoose.connect('mongodb://localhost/mongoose-intro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('successfully connected');
    })
    .catch(err => {
        console.log('an error occurred: ', err);
    })

// CRUD Create Read Update Delete

// Book.create({
//     title: 'another title',
//     author: 'another author',
//     pages: 200
// })
//     .then(book => {
//         console.log('this book was created: ', book);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// https://mongoosejs.com/docs/queries.html - all the queries
// Book.findById('601c1ed9214abf26ebfa2c0d')
//     .then(book => {
//         console.log('found this book by its id', book);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// get all the books with no parameters or just the book that matches the query
// Book.findOne({}) => get's the first document that matches the query
// Book.find({ title: 'some title' })
//     .then(books => {
//         console.log('found these books', books);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// Book.findOneAndUpdate({ title: 'changed title' }, { title: 'yet another title' }, { new: true })
//     .then(book => {
//         console.log(book);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// delete the book matching the query
Book.findOneAndDelete({ title: 'another title' })
    .then(book => {
        console.log(book);
        // this closes the connection
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    })
