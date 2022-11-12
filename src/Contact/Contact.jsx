

import React, { Component } from 'react'
import cont from './Contact.module.css'

export  class Contact extends Component {
  render() {
    return (
      <div className={cont.contact}>
        <h1>CONTACT ME</h1>
        <div className={cont.icons}>
            <div className={cont.line1}></div>
            <i class="fa-solid fa-star fs-2  mx-3"></i>
            <div className={cont.line1}></div>
          </div>
<div className=' container w-50'>
          <form>
          <div>
            <input
              type="text"
              className="form-control my-1 border-0"
              id=""
              aria-describedby="emailHelp"
              placeholder="name"
            ></input>
          </div>
<hr></hr>
          <div>
            <input
              type="text"
              className="form-control my-1 border-0"
              id=""
              aria-describedby="emailHelp"
              placeholder="phone number"
            ></input>
          </div>
<hr></hr>
          <div>
            <input
              type="email"
              className="form-control my-1 border-0"
              id=""
              placeholder="email"
            ></input>
          </div>
<hr></hr>
          <div>
            <textarea
              className="form-control my-1 border-0"
              id="txtarea"
              rows="4"
              placeholder="subject"
              maxlength="100"
            ></textarea>
          </div>
          <h2></h2>
          <button type="submit" className=" bg-danger btn btn-danger">
            send massage
          </button>
        </form>
        </div>
      </div>
    )
  }
}