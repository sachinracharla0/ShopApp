const mongoose = require('mongoose');

const properties = require('./properties');

module.exports = () => {
    mongoose.connect(properties.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    mongoose.connection.on('connected', () => {
        console.log(`Mongoose default connection is open on ${properties.DB_URL}.`);
    });
}