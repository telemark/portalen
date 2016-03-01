'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 5, 'There are 5 different handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.getHelppage, 'Handler has method getHelppage')

tap.ok(handlers.showLogin, 'Handler has method showLogin')

tap.ok(handlers.doLogin, 'Handler has method doLogin')

tap.ok(handlers.doLogout, 'Handler has method doLogout')
