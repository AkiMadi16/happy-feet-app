import React from 'react'
import './Users.css'

function Login({setIsLoggedIn}){
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('handle on change')
    setIsLoggedIn(true)
  }

  return (
    <div>
       <h2>Log In</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="signup">Username:</label>
            <input 
            type="text" 
            name="userName" 
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            name="email" 
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            />
            </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
      
        </form>
      </div>

    </div>
  )
}

export default Login;