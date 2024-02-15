const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('POSTGRES_HOST', 'ep-royal-bread-a7ivn2pp-pooler.ap-southeast-2.aws.neon.tech'),
      //host: env('DATABASE_HOST', 'ep-royal-bread-a7ivn2pp-pooler.ap-southeast-2.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      //port: env.int('DATABASE_PORT', 5432),
      database: env('POSTGRES_DATABASE', 'verceldb'),
      //database: env('DATABASE_NAME', 'verceldb'),
      user: env('POSTGRES_USER', 'default'),
      //user: env('DATABASE_USERNAME', 'default'),
      password: env('POSTGRES_PASSWORD', 'mSn08dbueqoX'),
      //password: env('DATABASE_PASSWORD', 'mSn08dbueqoX'),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});