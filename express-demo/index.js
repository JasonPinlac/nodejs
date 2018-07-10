const Joi = require('joi');
const express = require('express');

const app = express();

// adding a piece of middleware
app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req, res) => { // this callback function is a called a route handler
    res.send('Hello World');
});

app.get('/api/courses', function(req, res){
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){  
        res.status(404).send('The course with the given id was not found.')
        return;
    }
    res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) =>{
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if(result.error) {
        // 400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // look up the course
    // if not exists, return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){  
        res.status(404).send('The course with the given id was not found.')
        return;
    }

    // validate the bodies update
    // if invalid, return 400 - bad request
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);

    if(result.error) {
        // 400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // update course
    // return the updated course
    course.name  = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // look up the object
    // if not found return error 404 object not found
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){  
        res.status(404).send('The course with the given id was not found.')
        return;
    }

    let index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
    console.log('press CTRL+C to exit.')
});


