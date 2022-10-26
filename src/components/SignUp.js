import { useState} from 'react'
import './Users.css'
import { useNavigate } from 'react-router-dom'


function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  let navigate = useNavigate();
    
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    
    const form = event.target

    const data = Object.fromEntries(new FormData(form))
    // console.log(data)
  
    fetch('/api/users', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
  })
      .then(res => res.json())
      .then(res => {
          if (res.error) {
            console.error(res.error)
          } else {
            // when signed up navigate to log in page
            navigate('/login')
          }     
      })
  }

  const handleClickChange = () => {
    setShowPassword(showPassword ? false : true)
  }

return (
  <div>
    <h1>Hello! my Sign up</h1>
      <form 
        onSubmit={handleOnSubmit}
        // onSubmit={async (e) => {
        //   let newSignUp = await handleOnSubmit(
        //     e.target
        //   );
        //   navigate('/dashboard')
        //  }}
      >
       <div>
          <label htmlFor="name">Name:</label>
          <input 
          type="text"
          name="name"
          id="name"
          required />
       </div>
       <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          name="email"
          id="email"
          required
           />
       </div>
       <div>
          <label htmlFor="password">Password:</label>
          <input 
          type={showPassword ? 'text' : 'password'} 
          name="password"
          id="password"
          required
          />
          <button type="button" onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
       </div>
       {/* <div className={passwordStrength}>{passwordStrength}
       </div> */}
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
        <div>
            Already have an account?
            <button onClick={() => navigate('/login')} type='button'>Login</button>
          </div>
      </form>
  </div>
  )
}
export default SignUp;