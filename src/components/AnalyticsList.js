import React, { useEffect, useState, useContext } from 'react'

import StateContext from '../StateContext'

function AnalyticsList() {
  const appState = useContext( StateContext )

  const [ categories, setCategories ] = useState()
  const [ totalNoOfTransactions, setTotalNoOfTransactions ] = useState()
  const [ amount, setAmount ] = useState()
  console.log( appState.user )


  function groupBy( objectArray, property ) {
    return objectArray.reduce( function( acc, obj ) {
      let key = obj[ property ]
      if ( !acc[ key ] ) {
        acc[ key ] = []
      }
      acc[ key ].push( obj )
      return acc
    }, {} )
  }

  let groupedPeople = groupBy( appState.user.transactions, 'category' )
  console.log( groupedPeople )

  return (
    <article className="panel is-warning">
      <p className="panel-heading">
        Analytics
      </p>
      <a className="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">Groceries</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">32</div>
        </div>
      </a>
      <a className="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">Clothing</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">10</div>
        </div>
      </a>
    </article>
  )
}

export default AnalyticsList