import React, { Component } from 'react';

const Notification = ({name, onClick}) => {
  return(
    <section className="section">
      <div className="container">
        <div className="notification is-primary">
          <button className="delete" onClick={() => onClick()}></button>
          <strong>Welcome, {name}!</strong>
          <br></br>
          Thanks for signing up to Bambeuros. As a reward for signing up, we've credited your account with 100 free Bambeuros. Don't spend them all at once!
        </div>
      </div>
    </section>
  )
}

export default Notification;