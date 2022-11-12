import React, { Component } from 'react';
import port from './Portfolio.module.css';

export  class Portfolio extends Component {
  render() {
    return (
      <div className={port.portfolio}>
        <h1 className='text-center'>PORTFOLIO</h1>
        <div className={port.icons}>
            <div className={port.line1}></div>
            <i class="fa-solid text-center fa-star fs-2 my-3 mx-3"></i>
            <div className={port.line1}></div>
          </div>
          
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                
<div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset1.png'/>
                  
</div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>      

              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                    <div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset2.png'/>
                    </div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>

              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                    <div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset 3.png'/>
                    </div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>

              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                    <div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset 4.png'/>
                    </div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>

              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                    <div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset 5.png'/>
                    </div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>

              <div className="col-md-4 mb-3">
                  <div className={port.portcontect}>
                    <div className={port.portimg}>
                      <img className='w-100 rounded-4' src='/img/asset 6.png'/>
                    </div>
                    <div className={port.layer}>                   
                    <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

              </div>



            
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




            </div>
          </div>



      </div>
    )
  }
}







//  anathor solution

// import React, { useState } from 'react'
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// import style from "./Portfolio.module.css";

// const images = [
//     "http://routeegypt.com/start-react/assets/img/portfolio/cabin.png",
//     "http://routeegypt.com/start-react/assets/img/portfolio/circus.png",
//     "http://routeegypt.com/start-react/assets/img/portfolio/cake.png",
//     "http://routeegypt.com/start-react/assets/img/portfolio/game.png", 
//     "http://routeegypt.com/start-react/assets/img/portfolio/safe.png",
//     "http://routeegypt.com/start-react/assets/img/portfolio/submarine.png",
// ]
// const Portfolio =()  =>{
//     const[data,setdata] =useState({img:'',i:0})
//     const viewImage = (img,i) => {
//         setdata({img,i})
//     }
//     const Close=()=>{
//         setdata({img:'',i:0})
//     }
// return(
//     <>
// {data.img&&
// <div style={{
//     paddingTop:'40px',
//     paddingBottom:'35px',
//     width:'95%',
//     position:'fixed',
//     backgroundColor:'teal',
//     display:'flex',
//     flexDirection:'column',
//    top:'50%',
//    left:'50%',
//     transform:'translate(-50%,-50%)',
//    textAlign:'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow:'hidden',
//     zIndex:'44'
// }}>
// <img src={data.img} alt="" className='w-50 '/>
// <p className='text-white fs-4 pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi distinctio similique a, ut iure explicabo!</p>
// <button className='btn btn-info' onClick={()=>Close()}>Close</button>
// </div>
// }
// <div className={`${style.title} pt-5 text-center`}>
//     <h2>PORTFOLIO</h2>
//      <i className="fa-regular fa-star fs-2"></i>
//     </div>
//     <div className="container py-5 ">
//    <ResponsiveMasonry
//                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
//             >
//                 <Masonry >
//                     {images.map((image, i) => (
//                         <img
//                             key={i}
//                             src={image}
//                             style={{width: "100%", display: "block" ,cursor:'pointer'}}
//                             alt=""
//                             onClick={()=> viewImage(image,i)}
//                         />
//                     ))}
//                 </Masonry>
//             </ResponsiveMasonry>
//    </div>
//     </>
// )
// }
// export default Portfolio ;




























        