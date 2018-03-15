export default ({ data }) => (
  <div className='link'>
    <a href={data.url} title={data.description} target={'_blank'}>
      <i className='material-icons'>
        {data.icon}
      </i>
      {data.title}
    </a>
    <style jsx>
      {`
        .link {
          padding: 5px;
        }
        .link a {
          display: flex;
          padding: 5px;
          color: #777777;
        }
        i {
          margin-right: 8px;
        }
      `}
    </style>
  </div>
)
