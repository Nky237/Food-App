import  React, {useState} from 'react'
import Btn from '../Components/Btn'
import '../App.css'
import Sign from '../assests/sign.png'
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
 const[form, setForm] = useState({
  name : '',
  email : '',
  password: ''
 })
 const HandleChange = (e)=>{
  console.log(e)  
  setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
 }
 console.log(form)

 const HandleSubmit = (e)=>{
  e.preventDefault()
  sessionStorage.setItem('user', JSON.stringify(form))
  toast.success('sign up sucessful')
  setInterval(()=>{
    window.location = '/Login'
  }, 1500)
 }
  return (
    <div className='login' style={{color: 'black'}}>
       <ToastContainer />
        <div className='login-sec'>
          <div className='log-img'>
            <img src={Sign} />
          </div>
          <form className='login-form' onSubmit={HandleSubmit}>
            <div className='loginy'>
            <h1>Welcome Back!</h1>
            <input type='text' placeholder='Your First Name' name = 'name' onChange={HandleChange}/>
              <input type='email' placeholder='Your Email address'  name = 'email' onChange={HandleChange} />
              <input type='password' placeholder='Your Password'  name = 'password' onChange={HandleChange} />
              <Btn texty = {'SIGN UP'} />
              <div style={{display:'flex', justifyContent: 'center'}}>
                <p>Already have an account. </p>
                <p>LOGIN</p>
              </div>

            </div>           
          </form>
        </div>
    </div>
  )
}

export default SignUp