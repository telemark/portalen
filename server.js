const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}

const micro = require('micro')
const { setup, login, callback, logout } = require('./api')
const { getTasks } = require('./api/tasks')
const { getMessages } = require('./api/messages')
const { getLinks } = require('./api/links')
const redirect = (res, location, statusCode = 302) => { res.statusCode = statusCode; res.setHeader('Location', location); res.end() }
const { SESSION_KEY } = require('./config')
const session = require('micro-cookie-session')({
  name: 'session',
  keys: [SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000
})
const next = require('next')
const getRoles = require('./lib/get-roles')
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()
const { DEMO } = require('./config')

const server = micro(async (req, res) => {
  session(req, res)
  const pathname = req.url
  if (pathname === '/api/login') {
    if (DEMO) {
      req.session.data = require('./test/user.json')
      redirect(res, '/')
      return
    }
    return login(req, res)
  } else if (pathname === '/api/logout') {
    req.session = null
    if (DEMO) {
      redirect(res, '/')
      return
    }
    return logout(req, res)
  } else if (pathname === '/api/callback') {
    try {
      const callbackData = await callback(req, res)
      const profile = callbackData.userProfile[0]
      req.session.data = {
        ...profile,
        roles: getRoles(profile.companyName)
      }
      redirect(res, '/')
    } catch (error) {
      console.error(error)
      throw error
    }
  } else if (pathname === '/api/tasks') {
    const data = await getTasks(req, res)
    return data
  } else if (pathname === '/api/messages') {
    const data = await getMessages(req, res)
    return data
  } else if (pathname === '/api/links') {
    const data = await getLinks(req, res)
    return data
  } else {
    return handle(req, res)
  }
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    setup()
    console.log(`> Ready on http://localhost:${port}`)
  })
})
