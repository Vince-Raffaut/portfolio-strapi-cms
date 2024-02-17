const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: process.env.POSTGRES_HOST,
      port: env.int('DATABASE_PORT', 5432),
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      ssl: {
        rejectUnauthorized: env('POSTGRES_URL_NO_SSL', false)
      },
    },
    debug: false,
  },
});