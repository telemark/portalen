import { Component } from 'react'
import axios from 'axios'
import { Box, LinkButton } from '../styles'

const NewsItem = ({ data }) => (
  <Box style={{ textAlign: 'left', marginBottom: '14px' }}>
    <h4>{data.title}</h4>
    <p style={{ fontSize: '14px', lineHeight: '24px' }} dangerouslySetInnerHTML={{ __html: data.summary }} />
    <LinkButton href={data.url}>Les mer</LinkButton>
  </Box>
)

export default class NewsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: []
    }
  }

  async componentDidMount () {
    const url = `https://content.portalen.win/api/content?roles=${this.props.roles.join('|')}`
    const { data } = await axios.get(url)
    this.setState({ news: data.news })
  }

  render () {
    return (
      <div>
        {this.state.news && this.state.news.map((item, index) => <NewsItem data={item} key={index} />)}
      </div>
    )
  }
}
