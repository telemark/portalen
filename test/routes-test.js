'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 8, 'There are 8 different routes')
