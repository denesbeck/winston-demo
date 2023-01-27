const logger = require('./winston');

const error = (_req, res) => {
  logger.error('This is an error');
  res.send('ok');
};

const warn = (_req, res) => {
  logger.warn('This is a warning');
  res.send('ok');
};

const success = (_req, res) => {
  logger.success('This is a success');
  res.send('ok');
};

const start = (_req, res) => {
  logger.start('This is a start');
  res.send('ok');
};

const login = (_req, res) => {
  logger.login('This is a login');
  res.send('ok');
};

const param = (_req, res) => {
  logger.param('This is a param');
  res.send('ok');
};

const info = (_req, res) => {
  logger.info('This is an info');
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
