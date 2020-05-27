import React, { useEffect } from 'react'
import { Chart } from 'react-charts'

function TransactionsChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [ { x: 1, y: 20 }, { x: 2, y: 102 }, { x: 3, y: 104 } ]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )



  return (
    <div
      style={ {
        width: '400px',
        height: '300px',
        margin: '0 auto'
      } }
    >
      <Chart data={ data } axes={ axes } />
    </div>
  )
}

export default TransactionsChart