import React, { Component } from 'react'
import foo from './Footer.module.css'
export class Footer extends Component {
  render() {
    return (
      
      
      <footer className=' bg-dark py-5 text-center d-flex justify-content-center text-light fs-1 '>
        <div className='container'>
      <div class="row">
    <div class="col  w-25">
   <h3>LOCATION</h3>
   <h6 >2215 John Daniel Drive
Clark, MO 65243 
</h6>
    </div>
    <div class="col w-25 px-3">
    <h3>ABOUT FREELANCER</h3>


    <a href='' className={foo.iconfoo}><i class="fa-brands fa-facebook px-1 border-2 border-white"></i></a>
    <a href='' className={foo.iconfoo}><i class="fa-brands fa-twitter px-1 border-2 border-white"></i></a>
    <a href='' className={foo.iconfoo}><i class="fa-brands fa-linkedin px-1 border-2 border-white"></i></a>
    <a href='' className={foo.iconfoo}><i class="fa-solid fa-basketball px-1 border-2 border-white"></i></a>
   
    </div>
    <div class="col w-25">
    <h3>ABOUT FREELANCER</h3>
   <h6 >Freelance is a free to use, MIT licensed Bootstrap theme created by Route
</h6>
    </div>
  </div>
  </div>
        </footer>


      
       
    )
  }
}

