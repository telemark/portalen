const config = require('../config')
const mongojs = require('mongojs')
const db = mongojs(config.databaseUri)
const links = db.collection('userlinks')
const logger = require('../lib/logger')

module.exports.getLinks = (request, response) => {
  return new Promise((resolve, reject) => {
    const user = request.session && request.session.data ? request.session.data.userPrincipalName : false
    if (user) {
      logger('info', ['api', 'links', 'getLinks', 'user', user])
      const id = user.split('@')[0]
      links.find({user: id}).sort({title: 1}, (error, documents) => {
        if (error) {
          logger('error', ['api', 'links', 'getLinks', error])
          resolve([])
        } else {
          logger('info', ['api', 'links', 'getLinks', documents.length, 'success'])
          const userlinks = documents.map(document => Object.assign({}, document, {icon: 'link'}))
          resolve(userlinks)
        }
      })
    } else {
      logger('warn', ['api', 'links', 'getLinks', 'no user'])
    }
  })
}
