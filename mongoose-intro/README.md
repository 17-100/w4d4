## Mongoose Installation and Usage

```bash
$ npm install mongoose
```

```js
const mongoose = require('mongoose');
```

## Create a Schema and a model

```js
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    released: Date,
    inStock: Boolean,
    genre: String
});

const Book = mongoose.model('Book', bookSchema);
```
 
 ## Establish a connection
 ```js
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
 ```

 #### Check index.js for some more comments about the queries