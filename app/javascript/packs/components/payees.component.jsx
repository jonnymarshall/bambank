import React, { Component } from 'react';
import Payee from './payee.component'

const Payees = (props) => {
  const { payees, selectPayee } = props
  return(
    <section className="section">
      <div className="container">
        <h1 className="title is-5">Payees</h1>
        <div className="columns is-mobile scrolling-wrapper">
          {payees.map(payee => <Payee key={payee.id} id={payee.id} firstName={payee.firstName} avatarUrl={payee.avatarUrl} onClick={selectPayee} />)}
        </div>
      </div>
    </section>
  )
}

export default Payees;