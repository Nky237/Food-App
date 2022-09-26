import React from 'react'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Logo from '../assests/Logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>       
              <Router>  
              <nav>
              <div style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                  <img src={Logo} style ={{height:'30px'}} />
                  <h1>Lilies</h1>
              </div>
                <ul>
                        <li>
                          <Link to="./Home">Home</Link>
                        </li>
                        <li>
                          <Link to="./Login">Login</Link>
                        </li>
                        <li>
                          <Link to="/SignUp">Sign Up</Link>
                        </li>
                </ul>
                </nav>
                  <Routes>
                    <Route path="Home" element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="SignUp" element={<SignUp />} />
                </Routes>
              </Router>
          
    </div>
  )
}

export default Nav