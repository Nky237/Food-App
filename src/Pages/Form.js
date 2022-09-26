import React from 'react'
import '../App.css'


const Form = () => {
  return (
    <div className='container'>
        <form className='form'> 
            <div>
                <label>First Name: </label>
                <input type= 'text' />     
            </div>
            <div>
                <label>Last name: </label>
                <input type= 'text' />            
            </div>
            <div>
                <label> Email: </label>
                <input type= 'email' />       
            </div>
            <div>
                <label>Phone Number:  </label>
                <input type= 'text' />       
            </div>
            <div>
                <label>Text Area:  </label>
                <textarea />                 
            </div>
            <div>
               <input type = "Submit" value = "submit" />
            </div>
        </form>

    </div>
  )
}

export default Form