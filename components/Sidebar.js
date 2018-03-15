import ClickOutside from 'react-click-outside'

export default ({ toggleSidebar, children }) => (
  <ClickOutside onClickOutside={toggleSidebar}>
    <div className='sidebar' ref='sidebar'>
      <a onClick={toggleSidebar}>
        <i className='material-icons'>close</i>
      </a>
      {children}
      <style jsx>
        {`
          i {
            color: #777777;
            width: 100%;
            text-align: right;
            margin-right: 8px;
          }
          .sidebar {
            height: 100%;
            width: 256px;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            opacity: 1;
            background-color: white;
            overflow-x: hidden;
            overflow-y: auto;
          }
      `}
      </style>
    </div>
  </ClickOutside>
)
