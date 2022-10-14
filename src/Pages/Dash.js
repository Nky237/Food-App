import React from 'react'

const Dash = () => {
 let user = JSON.parse(sessionStorage.getItem('user'))
    return (
    <div>
        <h1>{`HELLO, ${user?.name} WELCOME TO YOUR DASHBOARD`}</h1>
    </div>
  )
}

export default Dash