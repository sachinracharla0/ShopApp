const express = require('express');
const bodyParser = require('body-parser');

const properties = require('./config/properties');
const db = require('./config/database');
const routes = require('./api/shop.routes');

const log = require('morgan');
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });

const app = express();
const router = express.Router();

db();

app.use(log('combined', { stream: accessLogStream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});
app.use('/api',router);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to Shops App'
    });
});

routes(router);

app.listen(properties.PORT, () => {
    console.log(`Server is up and running on port ${properties.PORT}.`);
});