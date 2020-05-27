import React, { useEffect } from 'react'

function TransactionList() {
  return (
    <article class="panel is-warning">
      <p class="panel-heading">
        Transaction List
        </p>
      <a class="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">New Yorker</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">20/02/2020</div>
        </div>
      </a>
      <a class="panel-block is-active">
        <div className="container">
          <div className="columns">
            <span className="column has-text-left">New Yorker</span>
            <span className="column has-text-right"><i className="fas fa-dollar-sign"></i>200</span>
          </div>
          <div className="has-text-left">20/02/2020</div>
        </div>
      </a>
    </article>
  )
}

export default TransactionList