import React, { Component } from 'react';

const Navbar = ({name}) => {
  return(
    <section className="section">
      <div className="container">
        <div className="notification is-primary">
          <button className="delete"></button>
          <strong>Welcome, {name}!</strong>
          <br></br>
          Thanks for signing up to Bambeauros. As a reward for signing up, we've credited your account with 100 free Bambeauros. Don't spend them all at once!
        </div>
      </div>
    </section>
  )
}

export default Navbar;