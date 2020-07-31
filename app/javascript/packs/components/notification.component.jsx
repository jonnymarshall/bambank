import React, { Component } from 'react';

const Navbar = () => {
  return(
    <section class="section">
      <div class="container">
        <div class="notification is-primary">
          <button class="delete"></button>
          <strong>Welcome, name!</strong>
          <br></br>
          Thanks for signing up to Bambeauros. As a reward for signing up, we've credited your account with 100 free Bambeauros. Don't spend them all at once!
        </div>
      </div>
    </section>
  )
}

export default Navbar;