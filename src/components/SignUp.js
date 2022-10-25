import React from 'react'
import './Users.css'


function SignUp({ setIsLoggedIn }) {
  
const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log('changed')
  setIsLoggedIn(true)
}

return (
  <div>
    <h1>Hello! my Sign up</h1>
      <form onSubmit={handleOnSubmit}>
       <div>
          <label htmlFor="signup">Username:</label>
          <input 
          type="text"
          name="username"
          id="" />
       </div>
       <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          name="email"
          id=""
           />
       </div>
       <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password"
          name="password"
          id=""
          placeholder="password is required" />
       </div>
       <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
          type="text"
          name="confirmpassword"
          id=""
          placeholder="password should match" />
       </div>

        <div>
         <button type="submit">Submit</button>
        </div>
      </form>
    
  </div>
)

}
export default SignUp;