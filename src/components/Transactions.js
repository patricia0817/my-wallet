import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import TransactionsChart from './TransactionsChart'
import TransactionList from './TransactionList'
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContext'


function Transactions( props ) {
  const appDispatch = useContext( DispatchContext )
  const appState = useContext( StateContext )


  function handleAnalytics() {
    props.history.push( '/analytics' )
  }

  function handleLogout() {
    appDispatch( { type: 'logout' } );
    props.history.push( '/' )
  }

  useEffect( () => {
    if ( !appState.loggedIn ) {
      props.history.push( '/' )
    }
  }, [] )

  return (
    appState.loggedIn &&
    < div className="columns is-centered" >
      <div className="page__container is-12-mobile is-10-tablet is-4-desktop is-centered transaction-list__container column has-text-centered">
        <TransactionsChart />
        <TransactionList />
        <div className="transactions__controls">
          <button onClick={ handleAnalytics } className="button is-dark">Analytics</button>
          <button onClick={ handleLogout } className="button is-warning">Log Out</button>
        </div>
      </div>
    </ div >
  )
}

export default withRouter( Transactions )