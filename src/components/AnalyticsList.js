import React, { useEffect, useState, useContext } from 'react'

import AnalyticsListItem from './AnalyticsListItem'


function AnalyticsList() {
  return (
    <article className="panel is-warning">
      <p className="panel-heading">
        Analytics
      </p>
      <AnalyticsListItem />
    </article>
  )
}

export default AnalyticsList