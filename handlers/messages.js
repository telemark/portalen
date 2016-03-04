'use strict'

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

function showEditMessagePage (request, reply) {
  var tags = require('../config/data/tags/dummy.json')
  var messageID = mongojs.ObjectID(request.params.messageID)
  messages.findOne({'_id': messageID}, function (error, document) {
    if (error) {
      reply(error)
    } else {
      console.log(document)
      var viewOptions = {
        version: pkg.version,
        versionName: pkg.louie.versionName,
        versionVideoUrl: pkg.louie.versionVideoUrl,
        systemName: pkg.louie.systemName,
        githubUrl: pkg.repository.url,
        credentials: request.auth.credentials,
        message: document,
        tags: tags
      }
      reply.view('message-edit', viewOptions)
    }
  })
}

function addMessage (request, reply) {
  var data = request.payload
  var now = new Date().getTime()
  data.tags = Array.isArray(data.tags) ? data.tags : [data.tags]
  data.type = 'message'
  data.userId = request.auth.credentials.data.userId
  data.userName = request.auth.credentials.data.cn
  data.timeStamp = now
  data.created = now
  data.modified = now
  data.history = [
    {
      action: 'created',
      timestamp: now,
      userId: request.auth.credentials.data.userId,
      userName: request.auth.credentials.data.cn
    }
  ]
  messages.save(data, function(error, data) {
    if (error) {
      reply(error)
    } else {
      reply.redirect('/?messageAdded=true')
    }
  })
}

function editMessage (request, reply) {
  var messageID = mongojs.ObjectID(request.params.messageID)
  var data = request.payload
  var now = new Date().getTime()
  var history = {
    action: 'updated',
    timestamp: now,
    userId: request.auth.credentials.data.userId,
    userName: request.auth.credentials.data.cn
  }
  var title = data.title
  var description = data.description
  var tags = Array.isArray(data.tags) ? data.tags : [data.tags]
  var modified = now

  messages.findOne({'_id': messageID}, function (error, document) {
    if (error) {
      reply(error)
    } else {
      console.log(document)
      document.title = title
      document.description = description
      document.tags = tags
      document.modified = modified
      document.history.push(history)
      messages.save(document, function (err, data) {
        if (err) {
          reply(err)
        } else {
          reply.redirect('/?messageUpdated=true')
        }
      })
    }
  })
}

function deleteMessage (request, reply) {
  var messageID = mongojs.ObjectID(request.params.messageID)
  messages.remove({'_id': messageID}, function(error, data) {
    if (error) {
      reply(error)
    } else {
      reply.redirect('/?messageDeleted=true')
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

module.exports.showEditMessagePage = showEditMessagePage

module.exports.getMessagesByTag = getMessagesByTag

module.exports.addMessage = addMessage

module.exports.editMessage = editMessage

module.exports.deleteMessage = deleteMessage

module.exports.markMessageAsRead = markMessageAsRead

module.exports.markMessageAsStarred = markMessageAsStarred
