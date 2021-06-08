const express = require('express');
const bodyParser = require('body-parser');
const port = 3200;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Welcome to my first server");
});

const callback = () => {
    console.log(`Server running on port ${port}`);
};

app.listen(port, callback);