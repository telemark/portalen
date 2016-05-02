'use strict'

var tap = require('tap')
var handlers = require('../handlers/messages')

tap.equal(Object.keys(handlers).length, 8, 'There are 8 different handlers for messages')

tap.ok(handlers.getMessagesByTag, 'Handler has method getMessagesByTag')

tap.ok(handlers.markMessageAsRead, 'Handler has method markMessageAsRead')

tap.ok(handlers.markMessageAsStarred, 'Handler has method markMessageAsStarred')
