import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'

const RecentTransactions = (props) => {
  const { recentTransactions, payees } = props
  console.log(props)

  return (
    <section class="section">
      <div class="container">
        <h1 class="title is-5">Recent transactions</h1>
        <div class="columns is-multiline">
          { recentTransactions.map(recentTransaction =>
            <RecentTransaction
              key={recentTransaction.id}
              amount={recentTransaction.amount}
              reference={recentTransaction.reference}
              date={recentTransaction.date}
              payee={payees.find((payee) => payee.id === recentTransaction.id)}
            />)
          }
        </div>
      </div>
    </section>
  )
}

export default RecentTransactions;