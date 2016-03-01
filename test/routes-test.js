'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 5, 'There are 5 different routes')
