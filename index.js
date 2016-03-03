'use strict'

var routes = require('./routes')
var messages = require('./routes/messages')
var feedback = require('./routes/feedback')

exports.register = function (server, options, next) {
  server.route(routes)
  server.route(messages)
  server.route(feedback)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
