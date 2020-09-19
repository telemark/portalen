import { Component } from 'react'

export default class extends Component {
  render () {
    const { phrase } = this.props
    const searchUrl = `/search?phrase=${phrase}`
    return (
      <>
        {!phrase
          ? <><h1>Søkeside</h1><p className='result-text'>Du har ennå ikke søkt etter noe</p></>
          : <>
            <h1>Søk: {phrase}</h1>
            <div className='nav'>
              <a href={searchUrl}>Alt innhold</a>
              <a href={`${searchUrl}&faset=employees`}>Ansatte</a>
              <a href={`${searchUrl}&faset=wwwtelemark`}>wwww.telemark.no</a>
              <a href={`${searchUrl}&faset=portaleninfo`}>Infosider</a>
            </div>
            <p className='result-text'>0 treff på søkeordet "{phrase}", viser side 1 av 1.</p>
          </>}
        <style jsx>
          {`
            .nav a {
              background: #6ac4ae;
              margin-right: 10px;
              margin-bottom: 10px;
              color: white;
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
              border-radius: 2px;
              min-width: 90px;
              padding: 0 12px;
              cursor: pointer;
              display: inline-block;
              line-height: 36px;
              outline: none;
              text-transform: uppercase;
              -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
              transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
              transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
            }
            .result-text {
              font-size: 18px;
              color: #999;
            }
          `}
        </style>
      </>
    )
  }
}
