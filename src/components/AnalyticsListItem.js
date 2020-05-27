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

  console.log( groupedCategories )
  for ( const category in groupedCategories ) {
    console.log( groupedCategories[ `${ category }` ] )
    return (
      <>
        <a className="panel-block is-active">
          <div className="container">
            <div className="columns">
              <span className="column has-text-left">{ category }</span>
              <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
            </div>
            <div className="has-text-left">32</div>
          </div>
        </a>
      </>
    )
  }


  // return (

  //   <>
  //     <a className="panel-block is-active">
  //       <div className="container">
  //         <div className="columns">
  //           <span className="column has-text-left">Groceries</span>
  //           <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
  //         </div>
  //         <div className="has-text-left">32</div>
  //       </div>
  //     </a>
  //     <a className="panel-block is-active">
  //       <div className="container">
  //         <div className="columns">
  //           <span className="column has-text-left">Clothing</span>
  //           <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
  //         </div>
  //         <div className="has-text-left">10</div>
  //       </div>
  //     </a>
  //   </>
  // )
}

export default AnalyticsListItem