const logger = require('./winston');
const _module = __dirname.split('/')[__dirname.split('/').length - 1];
const { randomBytes } = require('crypto');

const error = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getError',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.error('This is an error', logOptions);
  res.send('ok');
};

const warn = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getWarning',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.warn('This is a warning', logOptions);
  res.send('ok');
};

const success = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getSuccess',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.success('This is a success', logOptions);
  res.send('ok');
};

const start = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getStart',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.start('This is a start', logOptions);
  res.send('ok');
};

const login = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getLogin',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.login('This is a login', logOptions);
  res.send('ok');
};

const param = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getParam',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.param('This is a param', logOptions);
  res.send('ok');
};

const info = (_req, res) => {
  const logOptions = {
    module: _module,
    transaction: 'getInfo',
    transaction_id: randomBytes(4).toString('hex'),
  };
  logger.info('This is an info', logOptions);
  res.send('ok');
};

module.exports = {
  error,
  warn,
  success,
  start,
  login,
  param,
  info,
};
