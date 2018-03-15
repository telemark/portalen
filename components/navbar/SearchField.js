import { Component, Fragment } from 'react'

export default class SearchField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: false
    }
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch () {
    const newState = !this.state.search
    this.setState({ search: newState })
  }

  render () {
    return (
      <Fragment>
        <div style={{ display: 'inline-flex' }}>
          {
            this.state.search && <input type='text' className='searchbar' placeholder='Søk' autoFocus />
          }
          <a onClick={this.toggleSearch}>
            <i className='material-icons'>search</i>
          </a>
        </div>
        <style jsx>
          {`
            .searchbar {
              background-color: transparent;
              border-bottom: 1px solid rgba(0, 0, 0, 0.12);
              border-left: 0;
              border-right: 0;
              border-top: 0;
              color: rgb(33, 33, 33);
              display: block;
              font-size: 16px;
              outline: none;
              padding: 8px 0;
              width: 100%;
              outline: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              -webkit-touch-callout: none;
              -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            }
          `}
        </style>
      </Fragment>
    )
  }
}
