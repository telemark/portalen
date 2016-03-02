'use strict'

var tap = require('tap')
var handlers = require('../handlers/messages')

tap.equal(Object.keys(handlers).length, 3, 'There are 3 different handlers for messages')

tap.ok(handlers.getMessagesByTag, 'Handler has method getMessagesByTag')

tap.ok(handlers.markMessageAsRead, 'Handler has method markMessageAsRead')

tap.ok(handlers.markMessageAsStarred, 'Handler has method markMessageAsStarred')
