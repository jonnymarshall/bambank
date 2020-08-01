import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'

const RecentTransactions = (props) => {
  const { recentTransactions, payees, currentUserId } = props
  const findPayeeById = (id) => payees.find((payee) => payee.id === id)

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-5">Recent transactions</h1>
        <div className="columns is-multiline">
          { recentTransactions && payees && recentTransactions.map(recentTransaction =>
            <RecentTransaction
              key={recentTransaction.id}
              amount={recentTransaction.amount}
              reference={recentTransaction.reference}
              date={recentTransaction.createdAt.slice(0,10)}
              senderId={recentTransaction.senderId}
              receiverId={recentTransaction.receiverId}
              currentUserId={currentUserId}
              findPayeeById={findPayeeById.bind(this)}
            />)
          }
        </div>
      </div>
    </section>
  )
}

export default RecentTransactions;