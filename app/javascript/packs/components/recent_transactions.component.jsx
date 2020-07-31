import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'

const RecentTransactions = (props) => {
  const { recentTransactions, payees, currentUserId } = props

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-5">Recent transactions</h1>
        <div className="columns is-multiline">
          { recentTransactions.map(recentTransaction =>
            <RecentTransaction
              key={recentTransaction.id}
              amount={recentTransaction.amount}
              reference={recentTransaction.reference}
              date={recentTransaction.created_at.slice(0,10)}
              sender={recentTransaction.sender}
              receiver={recentTransaction.receiver}
              currentUserId={currentUserId}
            />)
          }
        </div>
      </div>
    </section>
  )
}

export default RecentTransactions;