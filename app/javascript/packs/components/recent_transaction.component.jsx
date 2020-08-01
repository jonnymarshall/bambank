import React, { Component, useState } from 'react';

const RecentTransaction = (props) => {
  const { id, amount, date, reference, senderId, receiverId, currentUserId, payee } = props
  // console.log(currentUserIsSender)
  // console.log(senderId)
  // console.log(receiverId)
  // console.log(payee)
  return (
    <div className="column is-full is-flex c-transaction">
      <figure className="image is-64x64 c-transaction-c-contact--avatar">
        <img className="is-rounded c-contact--avatar" src={`${payee.avatarUrl}`}></img>
      </figure>
      <div className="c-transaction--name">
        <strong><p>{payee.firstName}</p></strong>
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