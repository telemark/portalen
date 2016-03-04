'use strict'

var messages = require('../handlers/messages')

var routes = [
  {
    method: 'GET',
    path: '/messages/tags/{tag}',
    config: {
      handler: messages.getMessagesByTag,
      description: 'Show messages with tag'
    }
  },
  {
    method: 'GET',
    path: '/messages/add',
    config: {
      handler: messages.showAddMessagePage,
      description: 'Show page for adding messages'
    }
  },
  {
    method: 'POST',
    path: '/messages/add',
    config: {
      handler: messages.addMessage,
      description: 'Add new message'
    }
  },
  {
    method: 'GET',
    path: '/messages/{messageID}/edit',
    config: {
      handler: messages.showEditMessagePage,
      description: 'Show page for edit messages'
    }
  },
  {
    method: 'POST',
    path: '/messages/{messageID}/markasread',
    config: {
      handler: messages.markMessageAsRead,
      description: 'Mark the message as read'
    }
  },
  {
    method: 'POST',
    path: '/messages/{messageID}/markasstarred',
    config: {
      handler: messages.markMessageAsStarred,
      description: 'Mark the message as starred'
    }
  }
]

module.exports = routes
