const express = require('express');
const path = require('path');

// load seed data to algolia api.
require('./create-seed-data')();

const app = express();

// create virtual prefix to serve static files
const rootDir = path.join(path.dirname(path.basename(path.dirname(__dirname))), 'dist');
app.use('/assets', express.static(rootDir));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('*', (req, res) => {
    res.render('index', { NODE_ENV: process.env.NODE_ENV });
});

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
