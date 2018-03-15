import { Component, Fragment } from 'react'
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
    const { data } = await axios('/api/tasks')
    this.setState({tasks: data})
  }

  render () {
    return (
      <div className='tasks-wrapper'>
        <h1>Dine oppgaver</h1>
        {
          this.state.tasks && this.state.tasks.length < 0
            ? this.state.tasks.map((item, index) => <Task data={item} key={index} />)
            : <Fragment><i className='material-icons'>tag_faces</i> Du har ingen oppgaver.</Fragment>
        }
        <style jsx>
          {`
            .tasks-wrapper {
              text-align: left;
              padding: 10px;
              border-radius: 0;
              background-color: #FFF;
              box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
              padding-bottom: 20px;
            }
          `}
        </style>
      </div>
    )
  }
}
