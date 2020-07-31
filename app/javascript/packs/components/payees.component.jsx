import React, { Component } from 'react';
import Payee from './payee.component'

const Payees = (props) => {
  const { payees, selectPayee, toggleNewPayee } = props
  return(
    <section className="section">
      <div className="container">
        <h1 className="title is-5">Payees</h1>
        <div className="columns is-mobile scrolling-wrapper">
          <Payee key={0} firstName="Add new" avatarUrl="https://img.icons8.com/metro/1600/plus-math.png" onClick={toggleNewPayee} />
          {payees.map(payee => <Payee key={payee.id} id={payee.id} firstName={payee.firstName} avatarUrl={payee.avatarUrl} onClick={selectPayee} />)}
        </div>
      </div>
    </section>
  )
}

export default Payees;