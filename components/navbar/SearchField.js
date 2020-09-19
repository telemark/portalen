import Router from 'next/router'
import { Component, Fragment } from 'react'

export default class SearchField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: false
    }
    this.toggleSearch = this.toggleSearch.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  toggleSearch () {
    const newState = !this.state.search
    this.setState({ search: newState })
  }

  handleSearch (e) {
    if (e.key === 'Enter') {
      Router.push({
        pathname: '/search',
        query: { phrase: e.target.value },
        shallow: false
      })
    }
  }

  render () {
    return (
      <>
        <div style={{ display: 'inline-flex' }}>
          {
            this.state.search && <input type='text' onKeyPress={this.handleSearch} className='searchbar' placeholder='Søk' autoFocus />
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
      </>
    )
  }
}
