import { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import Sidebar from '../components/sidebar'
import NewsList from '../components/news'
import Shortcuts from '../components/shortcuts'
import Tasks from '../components/tasks'
import getRoles from '../lib/get-roles'
import Messages from '../components/messages'

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
      roles: false,
      sidebar: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  async componentDidMount () {
    if (this.state.user) {
      const roles = await getRoles(this.state.user.companyName)
      this.setState({
        roles: roles
      })
    }
  }

  toggleSidebar () {
    const newState = !this.state.sidebar
    this.setState({ sidebar: newState })
  }

  render () {
    return (
      <Page username={this.state.user} toggleSidebar={this.toggleSidebar}>
        {this.state.sidebar && this.state.roles && <Sidebar roles={this.state.roles} toggleSidebar={this.toggleSidebar} />}
        {!this.state.user && <h1>Vennligst logg inn...</h1>}
        {this.state.roles && <Shortcuts roles={this.state.roles} ip={this.props.ip} />}
        <div className='content-wrapper'>
          {this.state.user && <div><Tasks /><Messages /></div>}
          {this.state.roles && <NewsList roles={this.state.roles} />}
        </div>
        <style jsx>
          {`
            .content-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 14px;
              grid-row-gap: 14px;
              margin-top: 14px;
              grid-auto-rows: min-content;
            }
            @media screen and (max-width: 800px) {
              .content-wrapper {
                grid-template-columns: auto;
              }
            }
          `}
        </style>
      </Page>
    )
  }
}

export default Session(Admin)
