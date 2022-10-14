import React from 'react'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Dash from './Pages/Dash'


const App = () => {
  return (
    <div className='contaner'>
         <Router>  
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="dash" element={<Dash />} />
                </Routes>
              </Router>

   
    </div>
  )
}

export default App