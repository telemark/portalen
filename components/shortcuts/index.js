import { Icon, Box } from '../styles'

const Shortcut = ({ data }) => (
  <a href={data.url} target='_blank'>
    <Box style={{ minHeight: '80px' }}>
      <Icon name={data.icon} />
      <h4>{data.title}</h4>
      <div className='description'>{data.description}</div>
    </Box>
    <style jsx>
      {`
        .description {
          color: #999;
          font-size: 13px;
        }
      `}
    </style>
  </a>
)

export default ({ shortcuts }) => (
  <div className='shortcut-wrapper'>
    {shortcuts && shortcuts.map((item, index) => <Shortcut data={item} key={index} />)}
    <style jsx global>
      {`
        .shortcut-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          -ms-grid-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-column-gap: 14px;
          grid-row-gap: 14px;
        }
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
          .shortcut-wrapper {
            display: -ms-flexbox;
            flex-wrap: wrap;
          }
          .shortcut-wrapper div {
            margin: 5px;
            width: 250px !important;
            height: 80px !important;
          }
        }
      `}
    </style>
  </div>
)
