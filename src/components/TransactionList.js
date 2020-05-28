import React, { useEffect, useContext } from 'react'

import StateContext from '../StateContext'


function TransactionList() {
  const appState = useContext( StateContext )


  return (
    <article className="panel is-warning">
      <p className="panel-heading">
        Transaction List
        </p>
      { appState.user.transactions.map( ( transaction, index ) => {
        return (
          <a key={ index } className="panel-block is-active">
            <div className="container">
              <div className="columns">
                <span className="column has-text-left">{ transaction.merchant }</span>
                <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>{ transaction.amount.toFixed( 2 ) }</span>
              </div>
              <div className="has-text-left">{ transaction.date.toLocaleString() }</div>
            </div>
          </a>
        )
      } ) }
    </article>
  )
}

export default TransactionList