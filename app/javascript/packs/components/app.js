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
          transactionsIndex: "/transactions"
        }
      },
      currentUser: {
        id: 0,
        first_name: "Jonny",
        balance: 100.00,
        isFirstLogin: true
      },
      payees: [{
        id: 1,
        firstName: "Bob",
        email: "bob@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 2,
        firstName: "Alice",
        email: "alive@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 3,
        firstName: "Tom",
        email: "tom@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 4,
        firstName: "Sarah",
        email: "sarah@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 5,
        firstName: "Bill",
        email: "bill@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 6,
        firstName: "Craig",
        email: "craig@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 7,
        firstName: "Jamal",
        email: "jamal@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      },
      {
        id: 8,
        firstName: "Jenna",
        email: "jenna@example.com",
        avatarUrl: "https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"
      }],
      recentTransactions: [],
      selectedPayee: false,
      newPayeeSelected: false
    }
  }

  componentDidMount() {
    this.setState({csrfToken: document.head.querySelector("[name='csrf-token']").content})
    this.fetchTransactions()
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
              this.setState({recentTransactions: [...this.state.recentTransactions, transaction.attributes]})
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
    console.log(newPayment)
    this.cancelNewPayment()
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