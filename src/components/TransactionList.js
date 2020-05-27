import React, { useEffect } from 'react'

function TransactionList() {
  return (
    <article class="panel is-warning">
      <p class="panel-heading">
        Transaction List
      </p>
      {/* <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div> */}
      <a class="panel-block is-active">
        <div className="columns container">
          <span className="column has-text-left">New Yorker</span>
          <span className="column has-text-right"><i className="fas fa-dollar-sign">200</i></span>
        </div>
        <div className="columns container">
          <div className="column has-text-left">20/02/2020</div>
        </div>
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        marksheet
      </a>
    </article>

  )
}

export default TransactionList