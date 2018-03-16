import { Component } from 'react'
import getIp from '../lib/get-ip'
import getShortcuts from '../lib/get-shortcuts'
import getLinks from '../lib/get-links'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req } = ctx
    if (!req) return
    const user = req && req.session ? req.session.data : null
    if (!user) {
      ctx.res.writeHead(301, {Location: '/api/login'})
      ctx.res.end()
    } else {
      const ip = getIp(req)
      const roles = user.roles
      const shortcuts = getShortcuts(roles, ip)
      const links = getLinks(roles)
      return { user, ip, roles, shortcuts, links }
    }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
