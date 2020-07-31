import React, { Component } from 'react';

const NewPayee = ({onClick}) => {
  
  return(
    <section class="section c-new-transfer">
      <div class="container">
        <h1 class="title is-5">New payee</h1>
        <div class="field">
          <div class="user-details is-flex">
            <figure class="image is-64x64 c-transaction-c-contact--avatar">
              <img class="is-rounded c-contact--avatar" src="https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"></img>
            </figure>
            <div class="c-new-transfer--name">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input"></input>
              </div>
            </div>
          </div>
          <p class="help is-danger">Email is invalid</p>
        </div>
        
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Add payee</button>
          </div>
          <div class="control">
            <button class="button is-light" onClick={() => onClick()}>Cancel</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewPayee;