const Transport = require('winston-transport');

const { Pool } = require('pg');

const { PG_CONN_STRING } = process.env;
const pool = new Pool({ connectionString: PG_CONN_STRING });

module.exports = class PgTransport extends Transport {
  constructor(opts) {
    super(opts);
  }

  log(info, callback) {
    const { level, message, label, timestamp } = info;

    pool.query(
      'INSERT INTO public.logs (level, message, pod, timestamp) VALUES ($1, $2, $3, $4)',
      [level, message, label, timestamp],
      (err, _res) => {
        if (err) {
          console.error(err);
          return pool.end();
        }
      }
    );

    callback();
  }
};
