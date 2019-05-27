const express = require('express');
// express = lightweight
// routers -> organizing our endpoints
// middleware -> allows us to expand & customize

const db = require('./data/db.js');

const server = express();
const { users } = db;
// const users = db.users;

// creating endpoints
server.get('/', (req, res) => {
    console.log('inside the get request');
    // specify data type
    // set a status code
    // send a response
    res.send('<h2>Hello World</h2>');
});

server.get('/now', (req, res) => { 
    const now = new Date().toISOString();
    res.send(now);
});

// CRUD Operations
// Read - send back all users
server.get('/users', (req, res) => {
    users.find()
    .then(allUsers => {
        res.json(allUsers);
    })
    .catch(err => {
        res.status(500).send(err);
    });
});

// listening
server.listen(5050, () => {
    console.log('Listening on port 5050');
});
