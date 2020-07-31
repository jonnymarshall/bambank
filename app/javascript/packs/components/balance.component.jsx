import React, { Component } from 'react';

const Balance = (props) => {
  const { balance } = props
  return(
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            ₿{balance}
          </h1>
          <h2 class="subtitle is-6">
            Available balance
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Balance;