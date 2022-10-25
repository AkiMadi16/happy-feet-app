import { useState } from 'react';
import Dashboard from './components/Dashboard.js'
import SignUp from './components/SignUp.js'
import './App.css';
import Login from './components/Login.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [PasswordStrength, setPasswordStrength] = useState['password is required']
  // const [isSignedUp, setIsSignedUp] = useState(false)
  return (
    <div className="App">

    <h1>Welcome to Madie's Happy Feet App</h1>
    { isLoggedIn 
      ? (<Dashboard setIsLoggedIn={setIsLoggedIn}
      /> )
      : ( 
        <div>
        <Login setIsLoggedIn={setIsLoggedIn}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        PasswordStrength={PasswordStrength}
        setPasswordStrength={setPasswordStrength}
        />
          <div>
            <SignUp setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
       )}
    </div>
  );
}

export default App;
