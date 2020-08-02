import React, { Component, useState } from 'react';

const NewPayment = (props) => {
  const { onCancel, onSubmit, balance } = props
  const { firstName, id, avatarUrl } = props.payee
  const [paymentAmountIsWithinBalance, setPaymentAmountIsWithinBalance] = useState(true)
  const [paymentAmountEntered, setPaymentAmountEntered] = useState(false)
  const [paymentAmount, setPaymentAmount] = useState(false)
  const [referenceEntered, setReferenceEntered] = useState("")

  function handleAmountChange(e) {
    setPaymentAmountIsWithinBalance((balance - e.target.value) >= 0)
    setPaymentAmountEntered(e.target.value > 0)
    setPaymentAmount(e.target.value)
  }

  function handleReferenceChange(e) {
    setReferenceEntered(e.target.value)
  }

  return(
    <section className="section c-new-transfer">
      <div className="container">
        <h1 className="title is-5">New payment</h1>
        <div className="field">
          <div className="user-details is-flex">
            <figure className="image is-64x64 c-transaction-c-contact--avatar">
              <img className="is-rounded c-contact--avatar" src={`${avatarUrl}`}></img>
            </figure>
            <div className="c-new-transfer--name">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" value={`${firstName}`} disabled></input>
              </div>
            </div>
          </div>
        </div>
        
        <div className="field">
          <label className="label">Reference</label>
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Text input" placeholder="What's it for?" onKeyUp={(e) => handleReferenceChange(e)}></input>
          </div>
        </div>
        
        <div className="field has-icons-left">
          <label className="label">Amount</label>
          <p className="control">
            <input className="input is-primary" type="number" placeholder="Amount (₿)" onKeyUp={(e) => handleAmountChange(e)} />
          </p>
          {!paymentAmountIsWithinBalance && <p className="help is-danger">Balance too low!</p>}
        </div>
        
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary"
              disabled={!paymentAmountIsWithinBalance || !paymentAmountEntered}
              onClick={() => onSubmit(id, paymentAmount, referenceEntered)}>
              Transfer
            </button>
          </div>
          <div className="control">
            <button className="button is-light" onClick={() => onCancel()}>Cancel</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewPayment;