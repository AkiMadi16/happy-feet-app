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
  <div className="container form">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sign up</h5>
            <form 
              onSubmit={handleOnSubmit}>
              {/* onSubmit={async (e) => { */}
              {/* //   let newSignUp = await handleOnSubmit(
              //     e.target
              //   );
              //   navigate('/dashboard')
              //  }} */}
            
            <div className="mb-3">
                <label htmlFor="name"
                className="form-label">Name:</label>
                <input 
                type="text"
                name="name"
                id="name"
                className="form-control" 
                required />
            </div>
            <div className="mb-3">
                <label htmlFor="email"
                className="form-label">Email:</label>
                <input 
                className="form-control" 
                type="email"
                name="email"
                id="email"
                required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password"
                className="form-label">Password:</label>
                <div className='input-group'>
                  <input 
                  className="form-control" 
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  id="password"
                  required
                  />
                  <button 
                  className='btn btn-primary'
                  type="button" onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
                </div>
            </div>
            {/* <div className={passwordStrength}>{passwordStrength}
            </div> */}
            <div className="mb-3">
                <label htmlFor="confirmPassword"
                className="form-label">Confirm Password:</label>
                <input 
                className="form-control" 
                type="text"
                name="confirmpassword"
                id="confirmPassword"
                />
            </div>

            <div className='d-flex justify-content-between align-items-center'>
              <button 
                className='btn btn-primary'
                type="submit">Create Account</button>
              <div>
                Already have an account? <button className='btn btn-success' onClick={() => navigate('/login')} type='button'>Login</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default SignUp;