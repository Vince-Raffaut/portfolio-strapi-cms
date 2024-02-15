const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: process.env.POSTGRES_HOST,
      //host: env('DATABASE_HOST', 'ep-royal-bread-a7ivn2pp-pooler.ap-southeast-2.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      //port: env.int('DATABASE_PORT', 5432),
      database: process.env.POSTGRES_DATABASE,
      //database: env('DATABASE_NAME', 'verceldb'),
      user: process.env.POSTGRES_USER,
      //user: env('DATABASE_USERNAME', 'default'),
      password: process.env.POSTGRES_PASSWORD,
      //password: env('DATABASE_PASSWORD', 'mSn08dbueqoX'),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env('POSTGRES_URL_NO_SSL', false)
      },
    },
    debug: false,
  },
});