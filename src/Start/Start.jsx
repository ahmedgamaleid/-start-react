import React, { Component } from 'react'
import star from './Start.module.css'




export class Start extends Component {
  render() {
    return (
      <>
      <div className={star.all}>

      <div className='container'>

        <div className={star.all}>
        <img className='w-25 rounded-4' src="/img/asset 0.svg" />
      <h2 className={star.starh1}> start React </h2>
<div className='icon'>
<div className={star.line1}></div>
            <i class="fa-solid fa-star fs-2 my-3 mx-3"></i>
            <div className={star.line1}></div>
      </div>
      <p className={star.starp}>Graphic Artist - Web Designer - Illustrator</p>
      </div>

      </div>

      </div>
      </>
    )
  }
}

