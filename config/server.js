module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  app: {
    keys: Array(process.env.APP_KEYS),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: 'https://cms.vince-raffaut.dev'
});
