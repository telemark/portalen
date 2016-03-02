'use strict'

var fs = require('fs')
var mongojs = require('mongojs')
var Wreck = require('wreck')
var config = require('../config')
var pkg = require('../package.json')
var dbprofile = mongojs(config.DB_CONNECTION_PROFILE)
var dbmessage = mongojs(config.DB_CONNECTION_MESSAGE)
var profiles = dbprofile.collection('profiles')
var messages = dbmessage.collection('messages')
var wreckOptions = {
  json: true
}

function getFrontpage (request, reply) {
  messages.find({type: 'message'}).sort({timeStamp: -1}).limit(20, function (error, data) {
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
      latestId: request.query.documentAdded,
      messages: data || []
    }
    reply.view('index', viewOptions)
  })
}

function getHelppage (request, reply) {
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    credentials: request.auth.credentials
  }
  reply.view('help', viewOptions)
}

function getSettingsPage (request, reply) {
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    credentials: request.auth.credentials
  }
  reply.view('settings', viewOptions)
}

function showLogin (request, reply) {
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('login', viewOptions, {layout: 'layout-login'})
}
/*
function doLogin (request, reply) {
  var jwt = require('jsonwebtoken')
  var payload = request.payload
  var username = payload.username
  var password = payload.password
  var LdapAuth = require('ldapauth-fork')
  var auth = new LdapAuth(config.LDAP)

  auth.authenticate(username, password, function (err, user) {
    if (err) {
      console.error(JSON.stringify(err))
      if (err.name) {
        var viewOptions = {
          version: pkg.version,
          versionName: pkg.louie.versionName,
          versionVideoUrl: pkg.louie.versionVideoUrl,
          systemName: pkg.louie.systemName,
          githubUrl: pkg.repository.url,
          loginErrorMessage: err.name
        }
        reply.view('login', viewOptions, {layout: 'layout-login'})
      }
    } else {
      var tokenOptions = {
        expiresIn: '1h',
        issuer: 'https://auth.t-fk.no'
      }
      var data = {
        cn: user.cn,
        userId: user.sAMAccountName || ''
      }
      var token = jwt.sign(data, config.JWT_SECRET, tokenOptions)
      request.cookieAuth.set({
        token: token,
        isAuthenticated: true,
        data: data
      })
      auth.close(function (err) {
        if (err) {
          console.error(err)
        }
      })
      reply.redirect('/')
    }
  })
}
*/

 // For local testing
 function doLogin (request, reply) {
 var jwt = require('jsonwebtoken')
 var payload = request.payload
 var username = payload.username
 // var password = payload.password
 var user = {
 cn: username,
 userId: username
 }
 var tokenOptions = {
 expiresIn: '1h',
 issuer: 'https://auth.t-fk.no'
 }
 var token = jwt.sign(user, config.JWT_SECRET, tokenOptions)
 request.cookieAuth.set({
 token: token,
 isAuthenticated: true,
 data: user
 })

 reply.redirect('/')
 }

function doLogout (request, reply) {
  request.cookieAuth.clear()
  reply.redirect('/')
}

module.exports.getFrontpage = getFrontpage

module.exports.getHelppage = getHelppage

module.exports.getSettingsPage = getSettingsPage

module.exports.showLogin = showLogin

module.exports.doLogin = doLogin

module.exports.doLogout = doLogout
