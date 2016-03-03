'use strict'

var routes = require('./routes')
var messages = require('./routes/messages')

exports.register = function (server, options, next) {
  server.route(routes)
  server.route(messages)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
