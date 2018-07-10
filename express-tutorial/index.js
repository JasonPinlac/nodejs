const express = require('express');
const Joi = require('joi');

const app = express();

// middleware
app.use(express.json());

// fake database
const users = [
    {id: 1, name: 'Jason'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'David'}
];

// get for the homepage
app.get('/', (req, res) => res.send('express-tutorial'));

// get all users
app.get('/api/users', (req,res) => {
    res.send(users);
});

// get a single user
app.get('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send(`Could not find a user with id ${req.params.id}.`);
    res.send(user);
});

// post
app.post('/api/users/', (req, res) => {
    let result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    let user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
});

// put
app.put('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send(`Could not find a user with id ${req.params.id}.`);

    let result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);
   
    user.name = req.body.name;
    res.send(user);
});

// delete
app.delete('/api/users', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send(`Could not find a user with id ${req.params.id}.`);

    let index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000.');
    console.log('Press CTRL+C to exit.');
});

function validate(input) {
    const schema = {
        name: Joi.string().min(1).required(),
    };
    return Joi.validate(input, schema);
}