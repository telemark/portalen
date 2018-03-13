import { Component } from 'react'
import Shortcut from './Shortcut'
const axios = require('axios')

export default class Shortcuts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shortcuts: []
    }
  }

  async componentDidMount () {
    const url = `https://shortcuts.portalen.win/shortcuts?roles=${this.props.roles.join('|')}`
    const { data } = await axios.get(url)
    this.setState({shortcuts: data})
  }

  render () {
    return (
      this.state.shortcuts ? this.state.shortcuts.map(item => <Shortcut data={item} />) : null
    )
  }
}
