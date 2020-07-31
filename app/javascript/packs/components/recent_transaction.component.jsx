import React, { Component } from 'react';

const RecentTransaction = (props) => {
  console.log(props)
  const { id, amount, date, reference, payee } = props
  const { firstName } = payee
  return (
    <div class="column is-full is-flex c-transaction">
      <figure class="image is-64x64 c-transaction-c-contact--avatar">
        <img class="is-rounded c-contact--avatar" src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png"></img>
      </figure>
      <div class="c-transaction--name">
        <strong><p>{firstName}</p></strong>
        <p>{reference}</p>
      </div>
      <div class="c-transaction--details">
        <p>{date}</p>
        <strong><p>{amount}</p></strong>
      </div>
    </div>
  )
}

export default RecentTransaction;