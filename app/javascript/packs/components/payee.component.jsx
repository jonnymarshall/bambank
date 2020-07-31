import React, { Component } from 'react';

const Payee = (props) => {
  const { firstName, avatarUrl, onClick, id } = props
  return(
    <div class="column is-one-quarter-mobile has-text-centered" onClick={() => onClick(id)}>
      <figure class="image is-64x64 c-contact">
        <img class="is-rounded c-contact--avatar" src={`${avatarUrl}`}></img>
      </figure>
      <p>{firstName}</p>
    </div>
  )
}

export default Payee;