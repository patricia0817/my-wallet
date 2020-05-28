import React, { useEffect, useContext } from 'react'
import StateContext from '../StateContext'

function AnalyticsListItem() {
  const appState = useContext( StateContext )


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

  let groupedCategories = groupBy( appState.user.transactions, 'category' )


  return (

    <>
      { Object.keys( groupedCategories ).map( ( category, index ) => {
        let categoryAmount = 0;
        groupedCategories[ category ].map( ( transaction ) => {
          categoryAmount += transaction.amount
        } )
        return (
          <a key={ index } className="panel-block is-active">
            <div className="container">
              <div className="columns">
                <span className="column has-text-left">{ category }</span>
                <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>{ categoryAmount }</span>
              </div>
              <div className="has-text-left">{ category.length }</div>
            </div>
          </a>
        )
      } ) }
    </>
  )
}

export default AnalyticsListItem