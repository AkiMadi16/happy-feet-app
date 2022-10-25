import { useState } from 'react'
import './Users.css'

function Login({ setIsLoggedIn }){
  const [showPassword, setShowPassword] = useState(false)
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('handle on change')
    setIsLoggedIn(true)
  }

  const handleClickChange = () => {
    setShowPassword(showPassword ? false : true)
  }

  return (
    <div>
       <h2>Log In</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
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
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            id="password" 
            />
            <button type='button' onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
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