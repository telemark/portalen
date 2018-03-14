export default ({ data }) => (
  <a href={data.url} target='_blank'>
    <div className='shortcut'>
      <span>{data.icon}</span>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        .shortcut {
          display: inline-block;
          padding: 10px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          margin: 5px;
          width: 300px;
        }
      `}
    </style>
  </a>
)
