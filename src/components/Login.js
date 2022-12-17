import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Users.css";

function Login({ setLoggedInUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const data = Object.fromEntries(new FormData(form));
    // console.log(data)

    fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setError(null);
          setLoggedInUser(res);
          navigate("/dashboard");
        }
      });
  };

  const handleClickChange = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="container form">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Log In</h5>
              {error && <div className="alert alert-danger mb-3">{error}</div>}
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password{" "}
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleClickChange}
                    >
                      {showPassword ? "hide password" : "show password"}
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <div>Or</div>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/signup")}
                    type="button"
                  >
                    Create New Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='loginForm'>
    //    <h2>Log In</h2>
    //    {error && (
    //     <div class="error">{error}</div>
    //    )}
    //   <div>
    //     <form onSubmit={handleOnSubmit}>
    //       <div class="mb-3">
    //         <label for="exampleInputEmail1" class="form-label">Email address</label>
    //         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    //         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    //       </div>
    //       <div>
    //         <label htmlFor="email"></label>
    //         <input
    //         type="email"
    //         name="email"
    //         placeholder='Email address or phone number'
    //         />
    //       </div>

    //       <div>
    //         <label htmlFor="password"></label>
    //         <input
    //         type={showPassword ? 'text' : 'password'}
    //         name="password"
    //         id="password"
    //         placeholder='Password'
    //         />
    //         <button type='button' onClick={handleClickChange}>{showPassword ? 'hide password': 'show password'}</button>
    //         </div>
    //       <div>
    //         <button type='submit'>Submit</button>
    //       </div>

    //       <div>
    //         <button onClick={() => navigate('/signup')} type='button'>Create New Account</button>
    //       </div>

    //     </form>
    //   </div>

    // </div>
  );
}

export default Login;
