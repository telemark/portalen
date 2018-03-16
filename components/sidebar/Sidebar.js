import { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClickOutside () {
    this.props.toggleSidebar()
  }
  render () {
    const children = this.props.children
    return (
      <div className='sidebar' ref='sidebar'>
        {children}
        <style jsx>
          {`
            i {
              color: #777777;
              width: 100%;
              text-align: right;
            }
            .sidebar {
              padding: 10px;
              height: 100%;
              width: 256px;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: white;
              overflow-x: hidden;
              overflow-y: auto;
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
            }
        `}
        </style>
      </div>
    )
  }
}

export default onClickOutside(Sidebar)
