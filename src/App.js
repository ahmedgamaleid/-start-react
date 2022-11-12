/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { About } from './About/About';
import { Navbar } from './Navbar/Navbar';
import { Contact } from './Contact/Contact';
import { Start } from './Start/Start';
import { Portfolio } from './Portfolio/Portfolio';
import { Footer } from './Footer/Footer';
import { Layout } from './Layout/Layout';

import {createBrowserRouter , RouterProvider} from 'react-router-dom';
const Myroutes = createBrowserRouter([
  {path:'/', element:<Layout/> , children : [
    {index:'start' ,element:<Start/>},
    {path:'Portfoli' ,element:<Portfolio/>},
    {path:'About' ,element:<About/>},
    {path:'Contact' ,element:<Contact/>},
  ]}

]);




function App() {
  return (
    <>
    <RouterProvider router={Myroutes}/>
    </>
  );
}

export default App;
