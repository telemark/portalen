'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/help',
    config: {
      handler: handlers.getHelppage,
      description: 'Show the helppage'
    }
  },
  {
    method: 'GET',
    path: '/styringsinformasjon',
    config: {
      handler: handlers.getStyringsinfoPage,
      description: 'Show the styringsinformasjonspage'
    }
  },
  {
    method: 'GET',
    path: '/settings',
    config: {
      handler: handlers.getSettingsPage,
      description: 'Show the page for settings'
    }
  },
  {
    method: 'GET',
    path: '/login',
    config: {
      handler: handlers.showLogin,
      description: 'Show the Logingpage',
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/login',
    config: {
      handler: handlers.doLogin,
      description: 'Login',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/logout',
    config: {
      handler: handlers.doLogout
    }
  }
]

module.exports = routes
