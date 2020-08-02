import React, { Component } from 'react';
import RecentTransaction from './recent_transaction.component'
class ReactTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // New recent transacitons are enhanced with payee object and currentUserIsSender boolean
      newRecentTransactions: []
     }
  }

  componentDidUpdate(prevProps, prevState) {
    // Updates the state 
    const addNewRecentTransactionsToState = async() => {
      const newRecentTransactions = await this.getNewRecentTransactions()
      this.setState({newRecentTransactions: newRecentTransactions})
    }

    // Checks if recentTransactions prop has changed before setting state
    // Must be in conditional to avoid infinite loop!
    if (prevProps.recentTransactions !== this.props.recentTransactions) {
      addNewRecentTransactionsToState()
    }
  }

  // Maps over recentTransactions and adds payee and currentUserIsSender attributes to each recentTransaction obj
  async getNewRecentTransactions() {
    const { recentTransactions, currentUserId } = this.props
    return await Promise.all(recentTransactions.map(async(recentTransaction) => {
      const currentUserIsSender = recentTransaction.senderId === currentUserId
      const payee = await this.getPayee(recentTransaction, currentUserIsSender)
      const newRecentTransaction = { ...recentTransaction, payee: payee, currentUserIsSender: currentUserIsSender }
      return newRecentTransaction
    }))
  }

  async findPayeeById(id) {
    return await this.props.payees.find((payee) => payee.id === id)
  }

  async getPayee(recentTransaction, currentUserIsSender) {
    if (currentUserIsSender) {
      return await this.findPayeeById(recentTransaction.receiverId)
    } else {
      return await this.findPayeeById(recentTransaction.senderId)
    }
  }
  
  render() {
    const { currentUserId } = this.props
    const { newRecentTransactions } = this.state

    return (
      <>
        { newRecentTransactions &&
        <section className="section">
          <div className="container">
            <h1 className="title is-5">Recent transactions</h1>
            <div className="columns is-multiline">
              { newRecentTransactions.map((recentTransaction, idx) => <RecentTransaction
                key={idx}
                id={recentTransaction.id}
                amount={recentTransaction.amount}
                reference={recentTransaction.reference}
                date={recentTransaction.createdAt.slice(0,10)}
                senderId={recentTransaction.senderId}
                receiverId={recentTransaction.receiverId}
                currentUserId={currentUserId}
                currentUserIsSender={recentTransaction.currentUserIsSender}
                payee={recentTransaction.payee}
              />)}
            </div>
          </div>
        </section>}
      </>
    )
  }
}
 
export default ReactTransactions;