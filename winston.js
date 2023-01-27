const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, label } = format;
const pgTransport = require('./pg-transport');

const { formatTimestamp } = require('./utils');
const config = require('./config');

const CONSOLE = new transports.Console();
const PG_TRANSPORT = new pgTransport();

const { pid } = process;
const { HOSTNAME } = process.env;

const myFormat = printf(({ level, message, timestamp, label }) => {
  const ts = formatTimestamp(timestamp);

  return `[${ts}] [${label}] ${config.icons[level]} ${message}`;
});

const logger = createLogger({
  levels: config.levels,
  format: combine(timestamp(), label({ label: `${HOSTNAME || pid}` }), myFormat),
  transports: [CONSOLE, PG_TRANSPORT],
});

module.exports = logger;
