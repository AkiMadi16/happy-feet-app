import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard.js'
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

import './App.css';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  return (
    <div className="App">
      <h1>Welcome to Madie's Happy Feet App</h1>
      <Routes>  
        <Route path='/dashboard' element={<Dashboard />} /> 
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </div>
  );
}

export default App;
