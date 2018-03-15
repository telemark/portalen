import { Component } from 'react'
import Task from './Task'
const axios = require('axios')

export default class Tasks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  async componentDidMount () {
    const { data } = await axios('/api/task')
    this.setState({tasks: data})
  }

  render () {
    return (
      <div className='tasks-wrapper'>
        <h1>Dine oppgaver</h1>
        {this.state.tasks && this.state.tasks.map((item, index) => <Task data={item} key={index} />)}
        <style jsx>
          {`
            .tasks-wrapper {
              display: flex;
              flex: 0 1 auto;
              flex-wrap: wrap;
              justify-content: space-evenly;
              display: inline-block;
              padding: 10px;
              border-radius: 0;
              background-color: #FFF;
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
              margin: 5px;
              width: 100%;
            }
            @media screen and (max-width: 600px) {
              .tasks-wrapper {
                flex-direction: column;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
