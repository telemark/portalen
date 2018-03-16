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
    const url = `https://shortcuts.portalen.win/shortcuts?roles=${this.props.roles.join('|')}&myIp=${this.props.ip}`
    const { data } = await axios.get(url)
    this.setState({shortcuts: data})
  }

  render () {
    return (
      <div className='shortcut-wrapper'>
        {this.state.shortcuts && this.state.shortcuts.map((item, index) => <Shortcut data={item} key={index} />)}
        <style jsx>
          {`
            .shortcut-wrapper {
              display: grid;
              display: -ms-grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              -ms-grid-columns: repeat(auto-fit, minmax(250px, 1fr));
              grid-column-gap: 14px;
              grid-row-gap: 14px;
            }
          `}
        </style>
      </div>
    )
  }
}
