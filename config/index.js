'use strict'
// For OpenLDAP:
// searchFilter: process.env.LDAP_SEARCH_FILTER || '(uid={{username}})'
// For Active Directory:
// searchFilter: '(sAMAccountName={{username}})'

var path = require('path')

function ldapTlsSettings () {
  var fs = require('fs')
  var config = false

  if (process.env.LDAP_TLS_SETTINGS) {
    config = {
      rejectUnauthorized: process.env.LDAP_TLS_REJECT_UNAUTHORIZED ? true : false, // eslint-disable-line no-unneeded-ternary
      ca: [
        fs.readFileSync(path.join(__dirname, process.env.LDAP_TLS_CA_PATH))
      ]
    }
  }

  return config
}

var config = {
  SERVER_PORT_WEB: process.env.SERVER_PORT_WEB || 8000,
  DB_CONNECTION_MESSAGE: process.env.DB_CONNECTION_MESSAGE || 'mongodb://messageserver/louie',
  DB_CONNECTION_PROFILE: process.env.DB_CONNECTION_PROFILE || 'mongodb://profileserver/louie',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'Louie Louie, oh no, I got to go',
  LDAP: {
    url: process.env.LDAP_URL || 'ldap://ldap.forumsys.com:389',
    bindDn: process.env.LDAP_BIND_DN || 'cn=read-only-admin,dc=example,dc=com',
    bindCredentials: process.env.LDAP_BIND_CREDENTIALS || 'password',
    searchBase: process.env.LDAP_SEARCH_BASE || 'dc=example,dc=com',
    searchFilter: process.env.LDAP_SEARCH_FILTER || '(uid={{username}})',
    tlsOptions: ldapTlsSettings()
  }
}

module.exports = config
