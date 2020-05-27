import React, { useEffect } from 'react'

function AnalyticsList() {
  return (
    <article class="panel is-warning">
      <p class="panel-heading">
        Analytics
      </p>
      <a class="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">Groceries</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">32</div>
        </div>
      </a>
      <a class="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">Clothing</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">10</div>
        </div>
      </a>
    </article>
  )
}

export default AnalyticsList