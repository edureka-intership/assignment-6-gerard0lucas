const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes/routes.js');
const mongodb = require('./config/mongodb');

const hostname = 'localhost';
const port = 8080;

const app = express();

app.use(bodyParser.json());


app.use('/', router);
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`)
});

