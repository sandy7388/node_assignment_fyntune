const { createLogger, transports } = require('winston');
require('winston-mongodb');

const logger = createLogger({
  transports:[
    new transports.MongoDB({
      level: 'error',
      db: process.env.DB_CONNECTION,
      collection: 'error_logs'
    })
  ]
})

module.exports = logger