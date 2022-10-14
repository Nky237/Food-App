import React from 'react'
import Btn from '../Components/Btn'
import '../App.css'
import Log from '../assests/log.png'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
 const [loginData, setLoginData] = useState({
  email : '',
  password : ''
 })
 const handleChange = (e) =>{
  setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
 }
 const handleSubmit = (e) =>{
  e.preventDefault()
  const user = JSON.parse(sessionStorage.getItem('user'))
  if(loginData?.email === user?.email && loginData?.password === user?.password){
    toast.success('Sign in successful')
    setInterval(()=>{
        window.location = '/dash'
    },1500)
  }
  else{
    toast.error('Wrong email or password')
  }


 }
 console.log(loginData) 
  return (
    <div className='login' style={{color: 'black'}}>
      <ToastContainer />
        <div className='login-sec'>
          <div className='log-img'>
            <img src={Log} />
          </div>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='loginy'>
            <h1>Welcome Back!</h1>
              <input type='email' placeholder='Your Email address' 
              name='email' onChange={handleChange} />
              <input type='password' placeholder='Your Password'
              name='password' onChange={handleChange} />
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