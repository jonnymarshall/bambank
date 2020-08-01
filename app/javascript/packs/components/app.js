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
          transactions: "/transactions",
          users: "/users",
        }
      },
      currentUser: {
        id: 10,
        firstName: "Jonny",
        balance: 100.00,
        isFirstLogin: true
      },
      payees: [],
      recentTransactions: [],
      selectedPayee: false,
      // newPayeeSelected: false
    }
  }

  componentDidMount() {
    this.setState({csrfToken: document.head.querySelector("[name='csrf-token']").content})
    this.fetchTransactions()
    this.fetchPayees()
    console.log(this.state)
  }

  async fetchTransactions() {
    await fetch(this.state.routing.paths.transactions,
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
    await fetch(this.state.routing.paths.users,
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

  async verifyFirstLogin() {
    // call the api
    await fetch(this.state.routing.paths.users,
      {
        method: "PATCH",
        headers: { accept: "application/json", "X-CSRF-Token": this.state.routing.csrfToken }})
          .then((response) => response.json())
          // .then((data) => {
          //   data.data.forEach((user) => {
          //     this.setState({payees: [...this.state.payees, {
          //         id: user.attributes.id,
          //         firstName: user.attributes.first_name,
          //         email: user.attributes.email,
          //         avatarUrl: user.attributes.avatar_url
          //       }]})
          //     console.log(this.state.payees)
          //   })
          // })
    this.setState.currentUser({ isFirstLogin: false})
  }

  async makePaymentRequest(transactionDetails) {
    const params = new URLSearchParams(transactionDetails).toString();
    await fetch(this.state.routing.paths.transactions + "?" + params,
      {
        method: "POST",
        headers: { accept: "application/json",
          "X-CSRF-Token": this.state.routing.csrfToken }})
          .then((response) => response.json())
          .then((data) => {
            debugger
          //   data.data.forEach((user) => {
          //     this.setState({payees: [...this.state.payees, {
          //         id: user.attributes.id,
          //         firstName: user.attributes.first_name,
          //         email: user.attributes.email,
          //         avatarUrl: user.attributes.avatar_url
          //       }]})
          //     console.log(this.state.payees)
          //   })
          })
    this.setState.currentUser({ isFirstLogin: false})
  }

  selectPayee(payeeId) {
    if (this.state.selectedPayee === payeeId) {
      this.cancelNewPayment()
    } else {
      this.setState({ selectedPayee: payeeId})
    }
  }

  cancelNewPayment() {
    this.setState({ selectedPayee: null})
  }

  createNewPayment(receiverId, amount, reference) {
    const transactionDetails = {
      senderId: this.state.currentUser.id,
      receiverId: receiverId,
      amount: parseInt(amount),
      reference
    }
    this.makePaymentRequest(transactionDetails)
  }

  render() {
    const { payees, recentTransactions, selectedPayee, currentUser } = this.state
    const { id, balance, isFirstLogin, first_name } = currentUser
    const payee = payees.find(payee => payee.id == selectedPayee )
    const selectPayee = this.selectPayee.bind(this)
    const cancelNewPayment = this.cancelNewPayment.bind(this)
    const createNewPayment = this.createNewPayment.bind(this)
    const verifyFirstLogin = this.verifyFirstLogin.bind(this)

    return (
      <div className="App">
        {/* <Navbar/> */}
        <Balance balance={balance} />
        { isFirstLogin && <Notification name={first_name} onClick={verifyFirstLogin} /> }
        { payees && <Payees payees={payees} selectPayee={selectPayee} /> }
        { payee && <NewPayment payee={payee} onCancel={cancelNewPayment} onSubmit={createNewPayment} balance={balance} /> }
        { recentTransactions && payees && <RecentTransactions recentTransactions={recentTransactions} payees={payees} currentUserId={id} /> }
      </div>
    )
  }
}
 
export default App;