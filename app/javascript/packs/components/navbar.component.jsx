import React, { Component } from 'react';

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <span className="icon is-medium">
              <i className="fas-piggy-bank"></i>
            </span>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Home</a>
            <a className="navbar-item">Account</a>
            <a className="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;