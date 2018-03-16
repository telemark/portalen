import Sidebar from './Sidebar'
import { Icon } from '../styles'

const LinkItem = ({ data }) => (
  <div className='link'>
    <a href={data.url} title={data.description} target='_blank'>
      <Icon style={{ marginRight: '8px' }} name={data.icon} />
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
      `}
    </style>
  </div>
)

export default ({ links, toggleSidebar }) => (
  <Sidebar toggleSidebar={toggleSidebar}>
    { links && links.map((item, index) => <LinkItem data={item} key={index} />)}
  </Sidebar>
)
