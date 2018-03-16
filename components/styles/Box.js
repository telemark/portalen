export default (props) => (
  <div style={{ ...props.style }} className='box'>
    {props.children}
    <style jsx>
      {`
        .box {
          padding: 15px;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
        }
      `}
    </style>
  </div>
)
