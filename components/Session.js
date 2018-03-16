import { Component } from 'react'
import getIp from '../lib/get-ip'
import getRoles from '../lib/get-roles'
import getShortcuts from '../lib/get-shortcuts'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req } = ctx
    const user = req && req.session ? req.session.data : null
    if (ctx.req && !user) {
      ctx.res.writeHead(301, {Location: '/api/login'})
      ctx.res.end()
    }
    const ip = getIp(req)
    const roles = getRoles(user.companyName)
    console.log(roles)
    const shortcuts = getShortcuts(roles, ip)
    return { user, ip, roles, shortcuts }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
