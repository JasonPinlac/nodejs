const Joi = require('joi');
const config = require('./config')
const express = require('express');

const app = express();

let genres = [
    {id: 1, name: 'Adventure'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Fantasy'}
];

app.get('/', function(req, res) {
    res.send('Vidly baby!');
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) 
        return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
});

app.listen(config.port, () => {
    console.log(`Express server listening on port ${config.port}.`);
    console.log('Press CTRL+C to exit.')
});

