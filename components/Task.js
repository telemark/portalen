export default ({ data }) => (
  <a href={data.url} target='_blank'>
    <div className='task'>
      <a href={data.url} target='_blank'>{data.title}</a>
    </div>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        .task {
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
