export default ({ data }) => (
  <div className='news-item'>
    <h4>{data.title}</h4>
    <p style={{ fontSize: '14px' }} dangerouslySetInnerHTML={{__html: data.summary}} />
    <a href={data.url} target='_blank'>Les mer</a>
    <style jsx>
      {`
        .news-item {
          padding: 14px 16px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
        }
      `}
    </style>
  </div>
)
