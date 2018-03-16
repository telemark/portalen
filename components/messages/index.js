import { Component } from 'react'
import MessageItem from './MessageItem'
const axios = require('axios')

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
    this.setState({messages: data})
  }

  render () {
    return (
      <div className='messages-wrapper'>
        <div className='header'>
          <h1>Meldinger</h1>
          <div className='right'>
            <a className='button'>Ny Melding</a>
          </div>
        </div>
        {this.state.messages.length > 0 ? this.state.messages.map((item, index) => <MessageItem data={item} key={index} />) : null}
        <style jsx>
          {`
            .messages-wrapper {
              display: grid;
              display: -ms-grid;
              text-align: left;
              padding: 14px 16px;
              border-radius: 0;
              background-color: #FFF;
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
              padding-bottom: 20px;
              margin-top: 14px;
            }

            .header {
              display: inline-flex;
            }

            .right {
              margin-left: auto;
              margin-right: 0;
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
  }
}
