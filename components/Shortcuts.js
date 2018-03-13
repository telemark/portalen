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
      <div className={'shortcut-wrapper'}>
        {this.state.shortcuts ? this.state.shortcuts.map(item => <Shortcut data={item} />) : null}
        <style jsx>
          {`
            .shortcut-wrapper {
              display: flex;
              flex-flow: row wrap;
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
