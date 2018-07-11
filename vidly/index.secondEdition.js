const Joi = require('joi');
const express = require('express');
const logger = require('./logger');
const authenticator = require('./authenticator');


const app = express();

// middleware function that takes a req object that either returns a res to the client or passes control to aonther middleware function
// this function reads a request and if there is a JSON object in the body request it will parse the body of the request into a JSON object and then it will set req.body property
// the request processing pipline starts with a request and will move through the pipline hitting all middleware functions until finally a response is sent to the client.
app.use(express.json());

// custom middleware function for logging
// the next argument is reference to the next middleware function in the RPP.
app.use(logger);

// custom middleware function for authentication
app.use(authenticator);

let genres = [
    {id: 1, name: 'Adventure'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Fantasy'}
];

// root page
app.get('/', function(req, res) {
    res.send('Vidly baby!');
});

// get all genres
app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// get a specific genre
app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
});

// post a new genre
app.post('/api/genres', (req, res) => {
    const result = validateGenre(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

// put update
app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const result = validateGenre(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

// delete a genre
app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    
    res.send(genre);
});

app.listen(7600, () => {
    console.log(`Express server listening on port 7600.`);
    console.log('Press CTRL+C to exit.')
});

function validateGenre(bodyInput) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(bodyInput, schema);
}