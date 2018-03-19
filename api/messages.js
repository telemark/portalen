const makeUnique = require('tfk-unique-array')
const config = require('../config')
const mongojs = require('mongojs')
const db = mongojs(config.databaseUri)
const messages = db.collection('messages')
const logger = require('../lib/logger')

module.exports.getMessages = (request, response) => {
  return new Promise((resolve, reject) => {
    const roles = request.session.data.roles
    messages.find({}).sort({date_from: -1}, (error, documents) => {
      if (error) {
        logger('error', ['api', 'messages', 'getMessages', error])
        resolve([])
      } else {
        logger('info', ['api', 'messages', 'getMessages', 'total', documents.length, 'success'])
        let messages = []
        roles.forEach(role => {
          const roleMessages = documents.filter(document => document.role.includes(role))
          messages = messages.concat(roleMessages)
        })
        messages = makeUnique(messages)
        logger('info', ['api', 'messages', 'getMessages', 'for roles', messages.length])
        resolve(messages)
      }
    })
  })
}
