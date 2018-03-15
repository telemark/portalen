export default ({ data }) => (
  <div className='message-item'>
    <h4>Test</h4>
    <span className='description'>description</span>
    <p>text</p>
    <style jsx>
      {`
        .message-item {
          text-align: left;
          border-radius: 0;
          background-color: #FFF;
          border-top: 1px solid rgb(238, 238, 238);
          padding-top: 10px;
        }

       .description {
          color: #999;
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
