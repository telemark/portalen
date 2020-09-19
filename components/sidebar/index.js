import { Component } from 'react'
import Sidebar from './Sidebar'
import { Icon } from '../styles'
const axios = require('axios')

const LinkItem = ({ data }) => (
  <div className='link'>
    <a href={data.url} title={data.description} rel='noopener noreferrer' target='_blank'>
      <Icon style={{ marginRight: '8px' }} name={data.icon} />
      {data.title}
    </a>
    <style jsx>
      {`
        .link {
          padding: 5px;
        }
        .link a {
          display: flex;
          padding: 5px;
          color: #777777;
        }
      `}
    </style>
  </div>
)

export default class Links extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: props.links,
      userlinks: []
    }
  }

  async componentDidMount () {
    const { data } = await axios('/api/links')
    this.setState({ userlinks: data })
  }

  render () {
    return (
      <Sidebar toggleSidebar={this.props.toggleSidebar}>
        {this.state.links && this.state.links.concat(this.state.userlinks).map((item, index) => <LinkItem data={item} key={index} />)}
      </Sidebar>
    )
  }
}
