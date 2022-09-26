import React from 'react'
import Btn from '../Components/Btn'
import '../App.css'
import Log from '../assests/log.png'


const Login = () => {
  return (
    <div className='login' style={{color: 'black'}}>
        <div className='login-sec'>
          <div className='log-img'>
            <img src={Log} />
          </div>
          <form className='login-form'>
            <div className='loginy'>
            <h1>Welcome Back!</h1>
              <input type='email' placeholder='Your Email address' />
              <input type='password' placeholder='Your Password' />
              <Btn texty = {'LOGIN'} />
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <p>Create an account</p>
                <p>Forgot Passoword</p>
              </div>

            </div>           
          </form>
        </div>
    </div>
  )
}

export default Login