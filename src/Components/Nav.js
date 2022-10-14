import React, { useState } from 'react'
import Logo from '../assests/Logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Nav = () => {
  
  return (
    <div>       
          <nav>
              <div style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                  <img src={Logo} style ={{height:'30px'}} />
                  <h1>Lilies</h1>
              </div>
                <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/Login">Login</Link>
                        </li>
                        <li>
                          <Link to="/SignUp">Sign Up</Link>
                        </li>
                </ul>
          </nav>                
    </div>
  )
}

export default Nav