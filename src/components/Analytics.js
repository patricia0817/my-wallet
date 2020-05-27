import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'

import AnalyticsChart from './AnalyticsChart'
import DispatchContext from '../DispatchContext'
import AnalyticsList from './AnalyticsList'

function Analytics( props ) {
  const appDispatch = useContext( DispatchContext )

  function handleTransactions() {
    props.history.push( '/transactions' )
  }

  function handleLogout() {
    appDispatch( { type: 'logout' } )
  }


  return (
    <>
      <div className="columns is-centered">
        <div className="page__container  is-4-tablet is-centered transaction-list__container column is-5 has-text-centered">
          <AnalyticsChart />
          <AnalyticsList />
          <div className="transactions__controls">
            <button onClick={ handleTransactions } className="button is-dark">Transactions</button>
            <button onClick={ handleLogout } className="button is-warning">Log Out</button>
          </div>
        </div>
      </div>
      <p>Here, all your transactions will be displayed by categories</p>
    </>
  )
}

export default withRouter( Analytics )