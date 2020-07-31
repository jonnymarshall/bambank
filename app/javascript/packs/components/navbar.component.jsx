import React, { Component } from 'react';

const Navbar = () => {
  return(
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <span class="icon is-medium">
              <i class="fas-piggy-bank"></i>
            </span>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">Home</a>
            <a class="navbar-item">Account</a>
            <a class="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;