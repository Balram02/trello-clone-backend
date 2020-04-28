const { port } = require('../config');
const helmet = require('helmet');
const express = require('express');

const app = express();

app.use(helmet());

console.info(`App is running on port ${port + 1}`);