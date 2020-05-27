import React, { useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function AnalyticsChart() {

  return (
    <div
      style={ {
        width: '400px',
        height: '300px',
        margin: '0 auto',
        marginBottom: '2rem'
      } }
    >
      <PieChart
        data={ [
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ] }
      />
    </div >
  )

}

export default AnalyticsChart