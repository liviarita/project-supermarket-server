const express = require('express');
const bodyParser = require('body-parser');
const ConnectionsConfig = require('./config/database');
const RoutesAccount = require('./routes/account-route');
const port = 3200;
const app = express();

ConnectionsConfig.mongo.start();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Welcome to my first server");
});

RoutesAccount.start(app);

const callback = () => {
    console.log(`Server running on port ${port}`);
};

app.listen(port, callback);