import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export  class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Outlet/>
        
        <Footer/>
      </div>
    )
  }
}
