'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 9, 'There are 9 different routes')
