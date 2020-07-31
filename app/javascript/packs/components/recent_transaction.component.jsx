import React, { Component, useState } from 'react';

const RecentTransaction = (props) => {
  const { id, amount, date, reference, sender, receiver, currentUserId } = props

  const currentUserIsSender = (sender.id == currentUserId) ? true : false
  const payee = (sender.id == currentUserId) ? receiver : sender
  
  return (
    <div className="column is-full is-flex c-transaction">
      <figure className="image is-64x64 c-transaction-c-contact--avatar">
        <img className="is-rounded c-contact--avatar" src={`${payee.avatar_url}`}></img>
      </figure>
      <div className="c-transaction--name">
        <strong><p>{payee.first_name}</p></strong>
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