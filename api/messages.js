const config = require('../config')
const mongojs = require('mongojs')
const db = mongojs(config.databaseUri)
const messages = db.collection('messages')
const logger = require('../lib/logger')

module.exports.getMessages = (request, response) => {
  return new Promise((resolve, reject) => {
    const roles = request.session.data.roles
    logger('info', JSON.stringify(roles, null, 2))
    messages.find({}).sort({date_from: -1}, (error, documents) => {
      if (error) {
        logger('error', ['api', 'messages', 'getMessages', error])
        resolve([])
      } else {
        logger('info', ['api', 'messages', 'getMessages', documents.length, 'success'])
        resolve(documents)
      }
    })
  })
}
