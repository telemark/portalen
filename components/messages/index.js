import { Component } from 'react'
import axios from 'axios'
import Markdown from 'react-markdown'
import moment from 'moment'
import 'moment/locale/nb.js'
import { Box, LinkButton } from '../styles'

const MessageItem = ({ data }) => (
  <div className='message-item'>
    <h4>{data.title}</h4>
    <span className='description'>{moment(data.date_from).fromNow()} av {data.user && data.user.cn ? data.user.cn : 'Anonym'}</span>
    <Markdown source={data.text} />
    <style jsx>
      {`
        .message-item {
          background-color: #FFF;
          border-top: 1px solid rgb(238, 238, 238);
          padding-top: 10px;
        }

       .description {
          color: #999;
        }
      `}
    </style>
  </div>
)

export default class Messages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  async componentDidMount () {
    const url = `/api/messages`
    const { data } = await axios.get(url)
    this.setState({ messages: data })
  }

  render () {
    return (
      <Box style={{ display: 'grid', marginTop: '14px', textAlign: 'left' }}>
        <div className='header'>
          <h1>Meldinger</h1>
          <div className='right'>
            <LinkButton>Ny Melding</LinkButton>
          </div>
        </div>
        {this.state.messages.length > 0 && this.state.messages.map((item, index) => <MessageItem data={item} key={index} />)}
        <style jsx>
          {`
            .header {
              display: inline-flex;
            }

            .right {
              margin-left: auto;
              margin-right: 0;
            }
          `}
        </style>
      </Box>
    )
  }
}
