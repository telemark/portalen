import { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import Search from '../components/Search'

class SearchPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Page username={this.props.user} toggleSidebar={this.toggleSidebar}>
        <Search phrase={this.props.url.query.phrase} />
        <style jsx>
          {`
            .content-wrapper {
              display: grid;
              display: -ms-grid;
              grid-template-columns: 1fr 1fr;
              -ms-grid-columns: 1fr 1fr;
              grid-column-gap: 14px;
              grid-row-gap: 14px;
              margin-top: 14px;
              grid-auto-rows: min-content;
            }
            @media screen and (max-width: 800px) {
              .content-wrapper {
                grid-template-columns: auto;
              }
            }
          `}
        </style>
      </Page>
    )
  }
}

export default Session(SearchPage)
