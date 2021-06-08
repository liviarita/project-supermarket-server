const mongoose = require('mongoose');

const instances = {
    mongo: null,
    postgress: null,
    mysql: null
}

exports.mongo = {
    start: async () => {
        const connection = {
            URL: 'mongodb+srv://livia:3920@supermarket.x5oic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        };

        instances.mongo = mongoose.createConnection(connection.URL, {useNewUrlParser: true, useUnifiedTopology: true});

        instances.mongo.on('open', () => {
            console.log('connected');
        });

        instances.mongo.on('error', () => {
            console.log('connection failed');
        });
    },
    getInstance: () => {
        return instances.mongo;
    }
};