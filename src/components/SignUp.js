import React from 'react'
import './Users.css'


function SignUp({ setIsLoggedIn, showPassword, setShowPassword, passwordStrength, setPasswordStrength }) {
  
  
const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log('changed')
  setIsLoggedIn(true)
}


// const checkPass = (password) => {
//   const hasLowerCase = /[a-z]/.test(password)
//   const hasUpperCase = /[A-Z]/.test(password)
//   const hasNumber = /\d/.test(password)
//   const hasNonAlphaNumeric = /[^A-Za-z0-9]/.test(password)
//   const isOver8Char =   password.length > 8
//   const isOver12Char = password.length > 12
//   const score = hasLowerCase + hasUpperCase + hasNumber + hasNonAlphaNumeric + isOver8Char + isOver12Char

//  return { 
//     score, 
//     hasLowerCase,
//     hasUpperCase,
//     hasNumber,
//     hasNonAlphaNumeric,
//     isOver8Char,
//     isOver12Char,
//   }

// }

// const handleOnChange = e => {
//   let message = '';
//   const password = e.target.value;
//   const passwordInfo = checkPass(password)
//   console.log(passwordInfo)


//   if (password.length === 0) {
//     message = 'Password required'
//   } else if (passwordInfo.score === 1) {
//     message = 'weak'
//   } else if (passwordInfo.score < 6 ) {
//     message = 'medium'
//   } else {
//     message = 'strong! save password to login again!'
//   }

//   setPasswordStrength(message)
// }

const handleClickChange = () => {
  setShowPassword(showPassword ? false : true)
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
          id="signup" />
       </div>
       <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          name="email"
          id="email"
           />
       </div>
       <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="text"
          // type={showPassword ? 'text' : 'password'} onChange={handleOnChange}
          name="password"
          id="password"
          />
          <button id="password" onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
       </div>
       <div className={passwordStrength}>{passwordStrength}
       </div>
       <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
          type="text"
          name="confirmpassword"
          id="confirmPassword"
           />
       </div>

        <div>
         <button type="submit">Submit</button>
        </div>
      </form>
    
  </div>
)

}
export default SignUp;