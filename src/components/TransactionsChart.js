import React, { useEffect, useRef, useContext } from 'react'
import Chart from 'chart.js'
import moment from 'moment'

import StateContext from '../StateContext'
import { getTimeLabels, reduceTransactions } from '../Utils';


function TransactionsChart() {
  const appState = useContext( StateContext )
  const timeLabels = getTimeLabels( appState.user.transactions[ 0 ].date )
  const amountsGroupedByDate = reduceTransactions( appState.user.transactions, 'date' )

  let ctxTransactions = useRef( null );

  let transactionsData = [];

  Object.keys( amountsGroupedByDate ).map( ( date ) => {
    transactionsData.push( { x: date, y: amountsGroupedByDate[ date ].amount } )
  } )

  useEffect( () => {
    if ( ctxTransactions ) {
      new Chart( ctxTransactions.current, {
        type: 'line',
        data: {
          labels: timeLabels,
          datasets: [ {
            label: 'Transactions',
            data: transactionsData,
            backgroundColor: [
              'rgba(201, 198, 198, 0.79)',
            ],
            borderColor: [
              'rgba(255, 221, 87, 1)'
            ],
            borderWidth: 1
          } ]
        },
        options: {
          scales: {
            yAxes: [ {
              ticks: {
                beginAtZero: true
              }
            } ]
          }
        }
      } );
    }
  }, [ timeLabels, transactionsData ] )


  return (
    <canvas ref={ ctxTransactions } id="myTransactionChart" width="400" height="400"></canvas>
  )
}

export default TransactionsChart