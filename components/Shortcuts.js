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
    const { data: client } = await axios('https://api.ipify.org?format=json')
    const url = `https://shortcuts.portalen.win/shortcuts?roles=${this.props.roles.join('|')}&myIp=${client.ip}`
    const { data } = await axios.get(url)
    console.log(this.props.ip)
    this.setState({shortcuts: data})
  }

  render () {
    return (
      <div className='shortcut-wrapper'>
        {this.state.shortcuts && this.state.shortcuts.map((item, index) => <Shortcut data={item} key={index} />)}
        <style jsx>
          {`
            .shortcut-wrapper {
              display: flex;
              flex: 0 1 auto;
              flex-wrap: wrap;
              justify-content: space-evenly;
            }
            @media screen and (max-width: 600px) {
              .shortcut-wrapper {
                flex-direction: column;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
