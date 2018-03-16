export default ({ data }) => (
  <div className='news-item'>
    <h4>{data.title}</h4>
    <p style={{ fontSize: '14px', lineHeight: '24px' }} dangerouslySetInnerHTML={{__html: data.summary}} />
    <a className='button' href={data.url} target='_blank'>Les mer</a>
    <style jsx>
      {`
        .news-item {
          margin-top: 14px;
          text-align: left;
          padding: 14px 16px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
        }

       .button {
          background-color: white;
          color: #353535;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          padding: 0 8px;
          line-height: 40px
          cursor: pointer;
          text-transform: uppercase;
          border-radius: 2px;
          transition: all 0.3s ease 0s;
        }

        .button:hover {
          background-color: #b9b9b9;
        }

      `}
    </style>
  </div>
)
