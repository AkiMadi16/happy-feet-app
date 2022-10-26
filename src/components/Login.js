import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Users.css'

function Login({ setIsLoggedIn }){
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    
    const form = event.target

    const data = Object.fromEntries(new FormData(form))
    // console.log(data)
  
    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  const handleClickChange = () => {
    setShowPassword(showPassword ? false : true)
  }

  return (
    <div className='loginForm'>
       <h2>Log In</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email"></label>
            <input 
            type="email" 
            name="email" 
            placeholder='Email address or phone number'
            />
          </div>

          <div>
            <label htmlFor="password"></label>
            <input 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            id="password" 
            placeholder='Password'
            />
            <button type='button' onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
            </div>
          <div>
            <button type='submit'>Submit</button>
          </div>

          <div>
            <button onClick={() => navigate('/signup')} type='button'>Create New Account</button>
          </div>
      
        </form>
      </div>

    </div>
  )
}

export default Login;