import { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import Links from '../components/Links'
import NewsList from '../components/NewsList'
import Shortcuts from '../components/Shortcuts'
import Tasks from '../components/Tasks'
import getRoles from '../components/get-roles'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      meeting: false,
      updating: false,
      doAddForslag: false,
      adminView: true,
      activeAgendaId: false,
      activeForslagId: false,
      roles: false
    }
  }

  async componentDidMount () {
    if (this.state.user) {
      const roles = await getRoles(this.state.user.companyName)
      this.setState({
        roles: roles
      })
      console.log(this.props)
    }
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userPrincipalName : null}>
        {!this.state.user && <h1>Vennligst logg inn...</h1>}
        {this.state.roles && <Shortcuts roles={this.state.roles} ip={this.props.ip} />}
        {this.state.roles && <Links roles={this.state.roles} />}
        {this.state.roles && <NewsList roles={this.state.roles} />}
        {this.state.roles && <Tasks />}
      </Page>
    )
  }
}

export default Session(Admin)
