import React, { Component } from 'react'
import abo from './About.module.css'
export class About extends Component {
  render() {
    return (
     <div className={abo.allabo}>

      <div className='container'>
<h1 className={abo.h1abo}> about</h1>
<div className='lineone'></div>
      <i className='fa-solid fa-star fs-2 text-white py-5'></i>
      <div className='lineone'></div>
      <div  className='row'>
    <div className='col  w-25 py-4 d-flex justify-content-center text-start'>
    
    Freelancer is a free bootstrap theme created by Route.<br></br> The download includes the complete source files including <br></br>HTML, CSS, and JavaScript as well as optional <br></br>SASS stylesheets for easy customization.
  
    </div>
    <div className='col  py-4  w-25 d-flex justify-content-center text-start'>
    
    You can create your own custom avatar for the masthead,<br></br> change the icon in the dividers, and add your<br></br>email address to the contact form <br></br>to make it fully functional!
    
    </div>
  </div>
   
</div>

      </div>
    )
  }
}
