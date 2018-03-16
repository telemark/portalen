import Sidebar from './Sidebar'
import LinkItem from './LinkItem'

export default ({ links, toggleSidebar }) => (
  <Sidebar toggleSidebar={toggleSidebar}>
    { links && links.map((item, index) => <LinkItem data={item} key={index} />)}
  </Sidebar>
)
