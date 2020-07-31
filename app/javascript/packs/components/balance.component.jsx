import React, { Component } from 'react';

const Balance = (props) => {
  const { balance } = props
  return(
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            ₿{balance}
          </h1>
          <h2 className="subtitle is-6">
            Available balance
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Balance;