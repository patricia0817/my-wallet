import React, { useEffect, useRef, useContext } from 'react'
import Chart from 'chart.js';

import StateContext from '../StateContext'
import { reduceTransactions, getCategoryLabels } from '../Utils'


function AnalyticsChart() {
  const appState = useContext( StateContext )

  let ctxAnalytics = useRef( null );

  let transactions = reduceTransactions( appState.user.transactions, 'category' )

  let analitycsLabels = getCategoryLabels( transactions )

  let analitycsData = []
  Object.keys( transactions ).map( ( category ) => {
    analitycsData.push( transactions[ category ].amount )
  } )

  function random_bg_color() {
    let x = [ 2, 3, 4, 5, 6, 7, 8, 9 ][ Math.floor( Math.random() * 7 ) ];
    let bgColor = `rgba(197,220,231,.${ x })`;
    return bgColor
  }

  let colors = analitycsData.map( () => random_bg_color() )


  useEffect( () => {
    if ( ctxAnalytics ) {
      new Chart( ctxAnalytics.current, {
        type: 'pie',
        data: {
          labels: analitycsLabels,
          datasets: [ {
            data: analitycsData,
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
  }, [ analitycsLabels, analitycsData ] )


  return (
    <canvas ref={ ctxAnalytics } id="myAnalyticsChart" width="400" height="400"></canvas>
  )

}

export default AnalyticsChart