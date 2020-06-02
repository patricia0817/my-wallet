import moment from 'moment'


function getTimeLabels( today ) {
  let count = 0;
  let timeLabels = []
  while ( count <= 6 ) {
    timeLabels.push( moment( today ).subtract( count, 'days' ).format( 'dddd' ) )
    count++;
  }
  return timeLabels
}

function getCategoryLabels( transactions ) {
  let analitycsLabels = []
  Object.keys( transactions ).map( ( category ) => {
    analitycsLabels.push( category )
  } )
  return analitycsLabels
}

function reduceTransactions( transactions, reduceBy ) {
  const reducedTransactions = transactions.reduce( ( acc, tr ) => {
    if ( acc[ tr[ reduceBy ] ] !== undefined ) {
      acc[ tr[ reduceBy ] ].amount += tr.amount
      acc[ tr[ reduceBy ] ].count += 1
    } else {
      acc[ tr[ reduceBy ] ] = {
        amount: tr.amount,
        count: 1
      }
    }

    return acc
  }, {} )
  return reducedTransactions
}

export { getTimeLabels, reduceTransactions, getCategoryLabels }