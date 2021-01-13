// set up dependencies
const express = require('express');
const PORT  = process.env.PORT || 8081;
const app = express();

// Serve static content for App in "public directory"
app.use(express.statis('public'));

// Parsing request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give server access to them
const routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening at localhost: ${PORT}`)
})