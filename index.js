require('dotenv').config();
const logger = require('./winston');
const { randomBytes } = require('crypto');

const express = require('express');
const app = express();

const port = 3000;

app.use('/', require('./routes'));

const _module = __dirname.split('/')[__dirname.split('/').length - 1];

const logOptions = {
  module: _module,
  transaction: 'startServer',
  transaction_id: randomBytes(4).toString('hex'),
};

app.listen(port, () => logger.start(`Server is running on port ${port}`, logOptions));
