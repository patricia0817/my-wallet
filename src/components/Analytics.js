import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'

import AnalyticsChart from './AnalyticsChart'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import AnalyticsList from './AnalyticsList'

function Analytics( props ) {
  const appDispatch = useContext( DispatchContext )
  const appState = useContext( StateContext )

  function handleTransactions() {
    props.history.push( '/transactions' )
  }

  function handleLogout() {
    appDispatch( { type: 'logout' } )
  }

  useEffect( () => {
    if ( !appState.loggedIn ) {
      props.history.push( '/' )
    }
  }, [] )


  return (
    appState.loggedIn &&
    <>
      <div className="columns is-centered">
        <div className="page__container  is-12-mobile is-10-tablet is-4-desktop is-centered analytics-list__container column has-text-centered">
          <AnalyticsChart />
          <AnalyticsList />
          <div className="transactions__controls">
            <button onClick={ handleTransactions } className="button is-dark">Transactions</button>
            <button onClick={ handleLogout } className="button is-warning">Log Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter( Analytics )