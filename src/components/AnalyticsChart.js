import React, { useEffect, useRef, useContext } from 'react'
import Chart from 'chart.js';

import StateContext from '../StateContext'

function AnalyticsChart() {
  const appState = useContext( StateContext )

  let ctxAnalytics = useRef( null );

  let transactions = appState.user.transactions.reduce( ( acc, tr ) => {
    if ( acc[ tr.category ] !== undefined ) {
      acc[ tr.category ].amount += tr.amount
    } else {
      acc[ tr.category ] = {
        amount: tr.amount,
      }
    }

    return acc
  }, {} )

  function getAnalyticsLabels( transactions ) {
    let analitycsLabels = []
    Object.keys( transactions ).map( ( category ) => {
      analitycsLabels.push( category )
    } )
    return analitycsLabels
  }

  function populateAnalyticsData( transactions ) {
    let analitycsData = []
    Object.keys( transactions ).map( ( category ) => {
      analitycsData.push( transactions[ category ].amount )
    } )
    return analitycsData
  }

  function random_bg_color() {
    let x = [ 2, 3, 4, 5, 6, 7, 8, 9 ][ Math.floor( Math.random() * 7 ) ];
    let bgColor = `rgba(197,220,231,.${ x })`;
    return bgColor
  }

  let colors = populateAnalyticsData( transactions ).map( () => random_bg_color() )


  useEffect( () => {
    if ( ctxAnalytics ) {
      new Chart( ctxAnalytics.current, {
        type: 'pie',
        data: {
          labels: getAnalyticsLabels( transactions ),
          datasets: [ {
            data: populateAnalyticsData( transactions ),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
          } ]
        },
        options: {
          ...Chart.defaults.pie,
          legend: {
            display: false
          }
        }
      } );
    }
  }, [] )


  return (
    <canvas ref={ ctxAnalytics } id="myAnalyticsChart" width="400" height="400"></canvas>
  )

}

export default AnalyticsChart