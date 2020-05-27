import React from 'react'

import MyChart from './MyChart'
import TransactionList from './TransactionList'


function Transactions() {
  return (
    <div className="columns is-centered">
      <div className="page__container  is-4-tablet is-centered transaction-list__container column is-5 has-text-centered">
        <MyChart />
        <TransactionList />
      </div>
    </div>
  )
}

export default Transactions