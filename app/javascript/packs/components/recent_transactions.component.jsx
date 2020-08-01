import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'

const RecentTransactions = (props) => {
  const { recentTransactions, payees, currentUserId } = props
  // const test = (x) => { debugger }
  const findPayeeById = (id) => payees.find((payee) => payee.id === id)
  const checkIfCurrentUserIsSender = (recentTransaction) => { return recentTransaction.senderId === currentUserId }
  const getPayee = async (recentTransaction, currentUserIsSender) => {
    if (currentUserIsSender) {
      return await findPayeeById(recentTransaction.receiverId)
    } else {
      return await findPayeeById(recentTransaction.senderId)
    }
  }
  

  const getRecentTransaction = (recentTransaction, idx) => {
    const currentUserIsSender = checkIfCurrentUserIsSender(recentTransaction)
    const payee = getPayee(recentTransaction, currentUserIsSender)


    return payee && <RecentTransaction
      key={idx}
      id={recentTransaction.id}
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
          { recentTransactions && payees && recentTransactions.map((recentTransaction, idx) => { return getRecentTransaction(recentTransaction, idx) })}
        </div>
      </div>
    </section>
  )
}

export default RecentTransactions;