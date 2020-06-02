import React, { useEffect, useContext } from 'react'
import StateContext from '../StateContext'

import { reduceTransactions } from '../Utils'


function AnalyticsListItem() {
  const appState = useContext( StateContext )

  const analytics = reduceTransactions( appState.user.transactions, 'category' )


  return (
    <>
      { Object.keys( analytics ).map( ( category, index ) => {
        return (
          <a key={ index } className="panel-block is-active">
            <div className="container">
              <div className="columns">
                <span className="column has-text-left">{ category }</span>
                <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>{ analytics[ category ].amount.toFixed( 2 ) }</span>
              </div>
              <div className="has-text-left">{ analytics[ category ].count }</div>
            </div>
          </a>
        )
      } ) }
    </>
  )
}

export default AnalyticsListItem