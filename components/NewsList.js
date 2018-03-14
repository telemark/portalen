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
      <div className={'news-wrapper'}>
        {this.state.news ? this.state.news.map((item, index) => <NewsItem data={item} key={index} />) : null}
        <style jsx>
          {`
            .news-wrapper {
              display: flex;
              flex: 0 1 auto;
              flex-wrap: wrap;
              justify-content: space-evenly;
            }
            @media screen and (max-width: 600px) {
              .news-wrapper {
                flex-direction: column;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
