import React, { Component, useState } from 'react';

const RecentTransaction = (props) => {
  const { id, amount, date, reference, senderId, receiverId, currentUserId, payee, currentUserIsSender } = props
  const transactionThumbnail = "https://png.pngtree.com/svg/20161230/483acea99c.png"
  const balanceAddMinusClass = (currentUserIsSender) ? "has-text-danger" : ""
  const balanceAddMinusSymbol = (currentUserIsSender) ? "-" : "+"

  return (
    <div className="column is-full is-flex c-transaction">
      <figure className="image is-64x64 c-transaction-c-contact--avatar">
        {/* <img className="is-rounded c-contact--avatar" src={`${payee.avatarUrl}`} /> */}
        <img className="is-rounded c-contact--avatar" src={`${transactionThumbnail}`} />
      </figure>
      <div className="c-transaction--name">
        {/* <strong><p>{payee.firstName}</p></strong> */}
        <strong><p>{reference}</p></strong>
        {/* <p>{reference}</p> */}
      </div>
      <div className="c-transaction--details">
        <p>{date}</p>
        <strong><p className={`${balanceAddMinusClass}`}>{balanceAddMinusSymbol}£{amount}</p></strong>
      </div>
    </div>
  )
}


export default RecentTransaction;