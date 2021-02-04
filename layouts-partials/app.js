const express = require('express');
const app = express();

// imports the movies
const movies = require('./movies.json');

console.log(movies);
// $ npm install hbs
// this line allows us to use handlebars as the templating engine
app.use(express.static('public'));

// this is needed to be able to use partials
const handlebars = require('hbs');
handlebars.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('movies', { moviesList: movies });
})

app.get('/dog', (req, res) => {
    res.render('dog', { data: '<h2>this is a heading</h2>' })
})

app.get('/godfather', (req, res) => {
    const godfather = movies.find(function (movie) {
        return movie.title === 'The Godfather';
    })
    res.render('movieDetails', { clickedMovie: godfather })
})


app.listen(3000, () => {
    console.log('Server listening');
})