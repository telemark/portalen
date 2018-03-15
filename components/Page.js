import Layout from './Layout'
import Navbar from './Navbar'
import Main from './Main'

export default ({ username, toggleSidebar, children }) => (
  <Layout>
    <Navbar username={username} toggleSidebar={toggleSidebar} />
    <Main>
      { children }
    </Main>
  </Layout>
)
