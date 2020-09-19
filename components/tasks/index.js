import { Component } from 'react'
import axios from 'axios'
import { Icon, Box } from '../styles'
import iconMapper from '../../lib/task-icon-mapper'

const Task = ({ data }) => (
  <>
    <a href={data.url} rel='noopener noreferrer' target='_blank'>
      <Icon name={iconMapper(data.systemid)} /> {data.title}
    </a>
  </>
)

export default class Tasks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  async componentDidMount () {
    const { data } = await axios('/api/tasks')
    this.setState({ tasks: data })
  }

  render () {
    return (
      <Box style={{ textAlign: 'left', paddingBottom: '20px' }}>
        <h1>Dine oppgaver</h1>
        {
          this.state.tasks && this.state.tasks.length < 0
            ? this.state.tasks.map((item, index) => <Task data={item} key={index} />)
            : <><Icon style={{ marginRight: '22px' }} name='tag_faces' /> Du har ingen oppgaver.</>
        }
      </Box>
    )
  }
}
