## Add the layout file

### We create a layout file in views/layout.hbs

### In the body we reference the {{{ body }}}

 ```html
 // layout.hbs
<body>

   <h1>this is the movies app</h1>
   {{{ body }}} 

</body>
 ```

## Adding partials 

### To be able to use partials add these lines to app.js
```js
// app.js
const handlebars = require('hbs');
handlebars.registerPartials(__dirname + '/views/partials');
```

### Create the partials folder in /views and then add the partial movieCard

### To use the movieCard partial in movies.hbs
```html
<h1>Movies</h1>
{{#each moviesList}}
    {{> movieCard this}}
{{/each}}
```

### To use it also in movieDetails.hbs

```html
<h2>Details for {{clickedMovie.title}}</h2>
{{> movieCard clickedMovie }}
```
