'use strict'

var fs = require('fs')
var mongojs = require('mongojs')
var config = require('../config')
var pkg = require('../package.json')
var dbmessage = mongojs(config.DB_CONNECTION_MESSAGE)
var messages = dbmessage.collection('messages')

function getMessagesByTag (request, reply) {
  var tag = request.params.tag
  messages.find({type: 'message', tags: tag}).sort({timeStamp: -1}, function (error, data) {
    if (error) {
      console.error(error)
    }
    var viewOptions = {
      version: pkg.version,
      versionName: pkg.louie.versionName,
      versionVideoUrl: pkg.louie.versionVideoUrl,
      systemName: pkg.louie.systemName,
      githubUrl: pkg.repository.url,
      credentials: request.auth.credentials,
      messages: data || []
    }
    reply.view('messages', viewOptions)
  })
}

function showAddMessagePage (request, reply) {
  var tags = require('../config/data/tags/dummy.json')
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    credentials: request.auth.credentials,
    tags: tags
  }
  reply.view('message-add', viewOptions)
}

function addMessage (request, reply) {
  var data = request.payload
  var now = new Date().getTime()
  data.type = 'message'
  data.userId = request.auth.credentials.data.userId
  data.userName = request.auth.credentials.data.cn
  data.timeStamp = now
  data.created = now
  data.modified = now
  messages.save(data, function(error, data) {
    if (error) {
      reply(error)
    } else {
      reply.redirect('/')
    }
  })
}

function markMessageAsRead (request, reply) {
  var userId = request.auth.credentials.data.userId
  var messageID = request.params.messageID
  var type = 'read'
  var data = {
    userId: userId,
    messageID: messageID,
    type: type
  }
  messages.save(data, function(error, data) {
    reply(error || 'Meldingen er fjernet fra listen din')
  })
}

function markMessageAsStarred (request, reply) {
  var userId = request.auth.credentials.data.userId
  var messageID = request.params.messageID
  var type = 'starred'
  var data = {
    userId: userId,
    messageID: messageID,
    type: type
  }
  messages.save(data, function(error, data) {
    reply(error || 'Meldingen er lagret som favoritt')
  })
}

module.exports.showAddMessagePage = showAddMessagePage

module.exports.getMessagesByTag = getMessagesByTag

module.exports.addMessage = addMessage

module.exports.markMessageAsRead = markMessageAsRead

module.exports.markMessageAsStarred = markMessageAsStarred
