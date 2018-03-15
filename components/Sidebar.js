export default ({ children }) => (
  <div className='sidebar'>
    {children}
    <style jsx>
      {`
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
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        transition: -webkit-transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
    `}
    </style>
  </div>
)
