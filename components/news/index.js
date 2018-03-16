import { Component } from 'react'
import NewsItem from './NewsItem'
const axios = require('axios')

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
    this.setState({news: data.news})
  }

  render () {
    return (
      <div className='news-wrapper'>
        {this.state.news && this.state.news.map((item, index) => <NewsItem data={item} key={index} />)}
      </div>
    )
  }
}
