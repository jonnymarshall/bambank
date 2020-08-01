import React from 'react';
import Navbar from './navbar.component'
import Payees from './payees.component'
import NewPayment from './new_payment.component'
import NewPayee from './new_payee.component'
import Balance from './balance.component'
import RecentTransactions from './recent_transactions.component'
import Notification from './notification.component'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routing: {
        csrfToken: null,
        paths: {
          transactionsIndex: "/transactions",
          usersIndex: "/users"
        }
      },
      currentUser: {
        id: 0,
        first_name: "Jonny",
        balance: 100.00,
        isFirstLogin: true
      },
      payees: [],
      recentTransactions: [],
      selectedPayee: false,
      newPayeeSelected: false
    }
  }

  componentDidMount() {
    this.setState({csrfToken: document.head.querySelector("[name='csrf-token']").content})
    this.fetchTransactions()
    this.fetchPayees()
    console.log(this.state)
  }

  async fetchTransactions() {
    await fetch(this.state.routing.paths.transactionsIndex,
      {
        method: "GET",
        headers: { accept: "application/json", "X-CSRF-Token": this.state.routing.csrfToken }})
          .then((response) => response.json())
          .then((data) => {
            data.data.forEach((transaction) => {
              this.setState({recentTransactions: [...this.state.recentTransactions, {
                amount: transaction.attributes.amount,
                reference: transaction.attributes.reference,
                createdAt: transaction.attributes.created_at,
                receiverId: transaction.attributes.receiver.id,
                senderId: transaction.attributes.sender.id,
              }]})
            })
          })
  }

  async fetchPayees() {
    await fetch(this.state.routing.paths.usersIndex,
      {
        method: "GET",
        headers: { accept: "application/json", "X-CSRF-Token": this.state.routing.csrfToken }})
          .then((response) => response.json())
          .then((data) => {
            data.data.forEach((user) => {
              this.setState({payees: [...this.state.payees, {
                  id: user.attributes.id,
                  firstName: user.attributes.first_name,
                  email: user.attributes.email,
                  avatarUrl: user.attributes.avatar_url
                }]})
              console.log(this.state.payees)
            })
          })
  }

  selectPayee(payeeId) {
    this.cancelNewPayee()
    if (this.state.selectedPayee === payeeId) {
      this.cancelNewPayment()
    } else {
      this.setState({ selectedPayee: payeeId})
    }
  }

  cancelNewPayment() {
    this.setState({ selectedPayee: null})
  }

  cancelNewPayee() {
    this.setState({ newPayeeSelected: null})
  }

  toggleNewPayee() {
    this.cancelNewPayment()
    this.setState({ newPayeeSelected: !this.state.newPayeeSelected})
  }

  createNewPayment(recipientId, amount, reference) {
    const newPayment = {
      senderId: this.state.currentUser.id,
      recipientId,
      amount: parseInt(amount),
      reference
    }
  }

  render() {
    const { payees, recentTransactions, newPayeeSelected, selectedPayee } = this.state
    const { balance, isFirstLogin, first_name } = this.state.currentUser
    const payee = payees.find(payee => payee.id == selectedPayee )
    const selectPayee = this.selectPayee.bind(this)
    const cancelNewPayment = this.cancelNewPayment.bind(this)
    const toggleNewPayee = this.toggleNewPayee.bind(this)
    const createNewPayment = this.createNewPayment.bind(this)
    const currentUserId = this.state.currentUser.id

    return (
      <div className="App">
        {/* <Navbar/> */}
        <Balance balance={balance} />
        { isFirstLogin && <Notification name={first_name} /> }
        { payees && <Payees payees={payees} selectPayee={selectPayee} toggleNewPayee={toggleNewPayee} /> }
        { newPayeeSelected && <NewPayee onClick={toggleNewPayee} /> }
        { payee && <NewPayment payee={payee} onCancel={cancelNewPayment} onSubmit={createNewPayment} balance={balance} /> }
        { recentTransactions && payees && <RecentTransactions recentTransactions={recentTransactions} payees={payees} currentUserId={currentUserId} /> }
      </div>
    )
  }
}
 
export default App;