import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'

const RecentTransactions = (props) => {
  const { recentTransactions, payees, currentUserId } = props
  const findPayeeById = (id) => payees.find((payee) => payee.id === id)

  const getRecentTransaction = (recentTransaction) => {
    const currentUserIsSender = (recentTransaction.senderId == recentTransaction.currentUserId) ? true : false
    const payee = currentUserIsSender ? findPayeeById(recentTransaction.receiverId) : findPayeeById(recentTransaction.senderId)
    
    return (payee) && <RecentTransaction
      key={recentTransaction.id}
      amount={recentTransaction.amount}
      reference={recentTransaction.reference}
      date={recentTransaction.createdAt.slice(0,10)}
      senderId={recentTransaction.senderId}
      receiverId={recentTransaction.receiverId}
      currentUserId={currentUserId}
      payee={payee}
    />
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-5">Recent transactions</h1>
        <div className="columns is-multiline">
          { recentTransactions && payees && recentTransactions.map(recentTransaction => { return getRecentTransaction(recentTransaction) })}
        </div>
      </div>
    </section>
  )
}

export default RecentTransactions;