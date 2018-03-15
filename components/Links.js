import { Component } from 'react'
import Sidebar from './Sidebar'
import LinkItem from './LinkItem'
const axios = require('axios')

export default class Links extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: []
    }
    console.log(this.props)
  }

  async componentDidMount () {
    const url = `https://links.portalen.win/links?roles=${this.props.roles.join('|')}`
    const { data } = await axios.get(url)
    this.setState({links: data})
  }

  render () {
    return (
      <Sidebar toggleSidebar={this.props.toggleSidebar}>
        { this.state.links && this.state.links.map((item, index) => <LinkItem data={item} key={index} />)}
      </Sidebar>
    )
  }
}
