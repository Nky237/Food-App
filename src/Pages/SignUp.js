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
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!form?.name){
      toast.error('username is required')
  }
  if(!form?.password){
      toast.error('password is required')
  }
  else if(form?.password.length < 4){
      toast.error("password must be more than 4 characters")
  }
  else if(form?.password.length > 10){
      toast.error("password must be less than 10 characters")
  }
  if(!form?.email){
      toast.error('Email is required!');
  }
  else if (!regex.test(form?.email)) {
      toast.error("This is not a valid email format!")
}
else{
  toast.success('registered sucessfully')
  setInterval(()=>{
      window.location= '/Login'
  },2000)
}
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