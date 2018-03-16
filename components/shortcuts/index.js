import { Component } from 'react'
import Shortcut from './Shortcut'

export default class Shortcuts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shortcuts: []
    }
  }

  render () {
    return (
      <div className='shortcut-wrapper'>
        {this.props.shortcuts && this.props.shortcuts.map((item, index) => <Shortcut data={item} key={index} />)}
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
