import React, { Component } from 'react';

const NewPayee = ({onClick}) => {
  
  return(
    <section className="section c-new-transfer">
      <div className="container">
        <h1 className="title is-5">New payee</h1>
        <div className="field">
          <div className="user-details is-flex">
            <figure className="image is-64x64 c-transaction-c-contact--avatar">
              <img className="is-rounded c-contact--avatar" src="https://img.icons8.com/metro/1600/plus-math.png"></img>
            </figure>
            <div className="c-new-transfer--name">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input"></input>
              </div>
            </div>
          </div>
          <p className="help is-danger">Email is invalid</p>
        </div>
        
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Add payee</button>
          </div>
          <div className="control">
            <button className="button is-light" onClick={() => onClick()}>Cancel</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewPayee;