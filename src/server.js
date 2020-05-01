const { port } = require('../config');
const helmet = require('helmet');
const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');

const app = express();

const cardRoutes = require('./api/cards/cards.routes');

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

const router = express.Router();

db();

app.use(helmet());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
})

app.use('/api',router);
cardRoutes(router);

app.listen(port, () => {
    console.info(`App is running on port ${port}`);
})