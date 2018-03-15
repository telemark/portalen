import { Fragment } from 'react'
import iconMapper from '../lib/task-icon-mapper'

export default ({ data }) => (
  <Fragment>
    <a href={data.url} target='_blank'><i className='material-icons'>{iconMapper(data.systemid)}</i> {data.title}</a>
    <style jsx>
      {`
        a {
          text-decoration: none;
          display: block;
        }
      `}
    </style>
  </Fragment>
)
