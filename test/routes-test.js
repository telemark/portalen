'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 7, 'There are 7 different routes')
