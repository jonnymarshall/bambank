import React, { Component, useState } from 'react';

const NewPayment = (props) => {
  const { onCancel, onSubmit, balance } = props
  const { firstName, id } = props.payee
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
              <img className="is-rounded c-contact--avatar" src="https://i.pinimg.com/736x/0c/a0/33/0ca033247495682b657bed50ee0f6be1--guy-models-black-male-models.jpg"></img>
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
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" placeholder="What's it for?" onKeyUp={(e) => handleReferenceChange(e)}></input>
            <span className="icon is-small is-left">
              <svg className="svg-inline--fa fa-user fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""></svg><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </span>
            <span className="icon is-small is-right">
              <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""></svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </span>
          </div>
        </div>
        
        <div className="field has-icons-left">
          <label className="label">Amount</label>
          <p className="control">
            <input className="input" type="number" placeholder="Amount (£)" onKeyUp={(e) => handleAmountChange(e)} />
            <span className="icon is-small is-left">
              <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""></svg><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </span>
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