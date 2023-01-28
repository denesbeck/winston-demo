const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, label, splat } = format;
const pgTransport = require('./pg-transport');

const config = require('./config');

const CONSOLE = new transports.Console();
const PG_TRANSPORT = new pgTransport();

const { pid } = process;
const { HOSTNAME } = process.env;

const myFormat = printf(({ level, message, timestamp, module, transaction, transaction_id }) => {
  return `[${timestamp}] [${module}] ${config.icons[level]} ${transaction}(${transaction_id}): ${message}`;
});

const logger = createLogger({
  levels: config.levels,
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), splat(), label({ label: `${HOSTNAME || pid}` }), myFormat),
  transports: [CONSOLE, PG_TRANSPORT],
});

module.exports = logger;
