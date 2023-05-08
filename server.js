// express, db and path data
const express = require('express');
const path = require('path');
const data = require('Develop/db/db.json')
PORT = process.env.PORT || 3001;

// express app
app = express();

// middleware for parsing
app.use(express.json());
app.use(express.urlencoded());

console.log(__dirname)

// HTML route that will return * to index.html
// HTML route that will return /notes to notes.html

// API route that will make the api/notes to read and return the db.json file
// API route that will make the the 'post' function available to the request body and save it to the db.json

app.get('/', (req, res) => {
    console.info(`${req.method} request received for / path or index.html`)
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for /notes path or notes.html`)
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received to read and return notes`)
    res.json(data);
});

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to save new note`)
    // this is going to destructure the assignment
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
    };

    const response = {
        status: 'success',
        body: newNote,
    };

    console.log(response);
    res.status(200).json(response);
});

app.get('*', (req, res) => {
    console.info(`${req.method} request received for * path or index.html`)
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// this will listen
app.listen(PORT, () =>
console.log(`server listening at http://localhost:${PORT}`)
);