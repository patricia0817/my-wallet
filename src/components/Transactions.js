import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import TransactionsChart from './TransactionsChart'
import TransactionList from './TransactionList'
import DispatchContext from '../DispatchContext'

function Transactions( props ) {
  const appDispatch = useContext( DispatchContext )

  function handleAnalytics() {
    props.history.push( '/analytics' )
  }

  function handleLogout() {
    appDispatch( { type: 'logout' } );
    props.history.push( '/' )
  }


  return (
    <div className="columns is-centered">
      <div className="page__container  is-4-tablet is-centered transaction-list__container column is-5 has-text-centered">
        <TransactionsChart />
        <TransactionList />
        <div className="transactions__controls">
          <button onClick={ handleAnalytics } className="button is-dark">Analytics</button>
          <button onClick={ handleLogout } className="button is-warning">Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter( Transactions )