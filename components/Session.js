import { Component } from 'react'
import getIp from '../lib/get-ip'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req } = ctx
    const user = req && req.session ? req.session.data : null
    const ip = getIp(req)
    return { user, ip }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
