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
    const toggleSidebar = this.props.toggleSidebar
    const children = this.props.children
    return (
      <div className='sidebar' ref='sidebar'>
        <a onClick={toggleSidebar}>
          <i className='material-icons'>close</i>
        </a>
        {children}
        <style jsx>
          {`
            i {
              color: white;
              width: 100%;
              text-align: right;
              margin-right: 8px;
              background: #797979;
            }
            .sidebar {
              height: 100%;
              width: 256px;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: white;
              overflow-x: hidden;
              overflow-y: auto;
            }
        `}
        </style>
      </div>
    )
  }
}

export default onClickOutside(Sidebar)
