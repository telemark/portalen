export default ({ data }) => (
  <div className='news-item'>
    <h2>{data.title}</h2>
    <p dangerouslySetInnerHTML={{__html: data.summary}} />
    <a href={data.url} target='_blank'>Les mer</a>
    <style jsx>
      {`
        .news-item {
          display: inline-block;
          padding: 10px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          margin: 5px;
          width: 100%;
        }
      `}
    </style>
  </div>
)
