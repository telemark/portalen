const axios = require('axios')
const jwt = require('jsonwebtoken')
const log = require('../lib/logger')
const pkg = require('../package.json')
const config = require('../config')

function generateSystemToken (secret) {
  const payload = {
    system: pkg.name,
    version: pkg.version
  }
  const options = {
    expiresIn: '1m',
    issuer: 'https://auth.t-fk.no'
  }
  return jwt.sign(payload, secret, options)
}

exports.getTasks = async (request, response) => {
  const user = request.session && request.session.data ? request.session.data.userPrincipalName : false
  let result = []
  if (user) {
    const id = user.split('@')[0]
    const token = generateSystemToken(config.tasks_jwt_secret)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const url = `${config.tasks_service}/${id}`
    const options = {
      timeout: 3000
    }
    log('info', ['api', 'tasks', 'getTasks', `Retreiving tasks for ${user} - ${id}`])
    try {
      const { data } = await axios.get(url, options)
      result = data.data
      log('info', ['api', 'tasks', 'getTasks', 'user', user, 'tasks', result.length, 'success'])
    } catch (error) {
      log('error', ['api', 'tasks', 'getTasks', 'user', user, error])
    }
  } else {
    log('info', ['api', 'tasks', 'getTasks', 'No user in session'])
  }
  return result
}
