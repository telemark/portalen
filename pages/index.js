import { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import Sidebar from '../components/sidebar'
import NewsList from '../components/news'
import Shortcuts from '../components/shortcuts'
import Tasks from '../components/tasks'
import Messages from '../components/messages'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebar: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar () {
    const newState = !this.state.sidebar
    this.setState({ sidebar: newState })
  }

  render () {
    return (
      <Page username={this.props.user} toggleSidebar={this.toggleSidebar}>
        {this.state.sidebar && this.props.roles && <Sidebar links={this.props.links} toggleSidebar={this.toggleSidebar} />}
        {this.props.roles && <Shortcuts shortcuts={this.props.shortcuts} />}
        <div className='content-wrapper'>
          {this.props.user && <div><Tasks /><Messages /></div>}
          {this.props.roles && <NewsList roles={this.props.roles} />}
        </div>
        <style jsx>
          {`
            .content-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              -ms-grid-columns: 1fr 1fr;
              grid-column-gap: 14px;
              grid-row-gap: 14px;
              margin-top: 14px;
              grid-auto-rows: min-content;
            }
            @media screen and (max-width: 800px) {
              .content-wrapper {
                grid-template-columns: auto;
                -ms-grid-columns: auto;
              }
            }
          `}
        </style>
      </Page>
    )
  }
}

export default Session(Admin)
