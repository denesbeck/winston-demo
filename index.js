require('dotenv').config();
const logger = require('./winston');

const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'));

app.listen(port, () => logger.start(`Server is running on port ${port}`));
