import React, { useEffect, useRef, useContext } from 'react'
import Chart from 'chart.js'
import StateContext from '../StateContext'
import moment from 'moment'

function TransactionsChart() {
  const appState = useContext( StateContext )

  let ctx = useRef( null );

  function getTimeLabels( today ) {
    let count = 0;
    let timeLabels = []
    while ( count <= 6 ) {
      timeLabels.push( moment( today ).subtract( count, 'days' ).format( 'dddd' ) )
      count++;
    }
    return timeLabels
  }


  function populateTransactionData() {
    const amountsGroupedByDate = appState.user.transactions.reduce( ( acc, tr ) => {
      if ( acc[ tr.date ] !== undefined ) {
        acc[ tr.date ].amount += tr.amount
      } else {
        acc[ tr.date ] = {
          amount: tr.amount,
        }
      }

      return acc
    }, {} )

    let transactionsData = [];

    Object.keys( amountsGroupedByDate ).map( ( date ) => {
      transactionsData.push( { x: date, y: amountsGroupedByDate[ date ].amount } )
    } )
    return transactionsData
  }


  useEffect( () => {
    if ( ctx ) {
      new Chart( ctx.current, {
        type: 'line',
        data: {
          labels: getTimeLabels( appState.user.transactions[ 0 ].date ),
          datasets: [ {
            label: 'Transactions',
            data: populateTransactionData(),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)'
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
  }, [] )


  return ( <canvas ref={ ctx } id="myChart" width="400" height="400"></canvas> )
}


export default TransactionsChart