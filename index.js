const express = require('express');
// express = lightweight
// routers -> organizing our endpoints
// middleware -> allows us to expand & customize

const server = express();

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



// listening
server.listen(5050, () => {
    console.log('Listening on port 5050');
});
