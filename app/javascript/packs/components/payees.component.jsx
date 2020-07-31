import React, { Component } from 'react';
import Payee from './payee.component'

const Payees = (props) => {
  const { payees, selectPayee, toggleNewPayee } = props
  return(
    <section class="section">
      <div class="container">
        <h1 class="title is-5">Payees</h1>
        <div class="columns is-mobile scrolling-wrapper">
          <Payee key={0} firstName="Add new" avatarUrl="https://img.icons8.com/metro/1600/plus-math.png" onClick={toggleNewPayee} />
          {payees.map(payee => <Payee key={payee.id} id={payee.id} firstName={payee.firstName} avatarUrl={payee.avatarUrl} onClick={selectPayee} />)}
        </div>
      </div>
    </section>
  )
}

export default Payees;