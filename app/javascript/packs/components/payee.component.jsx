import React, { Component } from 'react';

const Payee = (props) => {
  const { firstName, avatarUrl, onClick, id } = props
  return(
    <div className="column is-one-quarter-mobile has-text-centered u-pointer" onClick={() => onClick(id)}>
      <figure className="image is-64x64 c-contact">
        <img className="is-rounded c-contact--avatar" src={`${avatarUrl}`}></img>
      </figure>
      <p>{firstName}</p>
    </div>
  )
}

export default Payee;