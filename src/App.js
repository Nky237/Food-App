import React from 'react'
import Form from './Pages/Form'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='contaner'>
    <Nav />
    <Footer />
    </div>
  )
}

export default App