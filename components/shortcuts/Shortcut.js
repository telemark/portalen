export default ({ data }) => (
  <a href={data.url} target='_blank'>
    <div className='shortcut'>
      <i className='material-icons'>{data.icon}</i>
      <h4>{data.title}</h4>
      <div className='description'>{data.description}</div>
    </div>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        .shortcut {
          padding: 15px;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          min-height: 80px;
        }
        .description {
          color: #999;
          font-size: 13px;
        }
      `}
    </style>
  </a>
)
