import React, { Component, useState } from 'react';

const RecentTransaction = (props) => {
  const { id, amount, date, reference, sender, receiver, currentUserId } = props

  
  function getPayeeName() {
    return (sender.id == currentUserId) ? receiver.first_name : sender.first_name
  }
  
  return (
    <div className="column is-full is-flex c-transaction">
      <figure className="image is-64x64 c-transaction-c-contact--avatar">
        <img className="is-rounded c-contact--avatar" src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png"></img>
      </figure>
      <div className="c-transaction--name">
        <strong><p>{getPayeeName()}</p></strong>
        <p>{reference}</p>
      </div>
      <div className="c-transaction--details">
        <p>{date}</p>
        <strong><p>{amount}</p></strong>
      </div>
    </div>
  )
}

export default RecentTransaction;