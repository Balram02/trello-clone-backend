const { port } = require('../config');
const helmet = require('helmet');
const express = require('express');
const db = require('../config/database');
const app = express();

app.use(helmet());
db();



app.listen(port, () => {
    console.info(`App is running on port ${port}`);
    
})