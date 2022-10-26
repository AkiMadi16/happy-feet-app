import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import Recommendation from './components/Recommendation.js'
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

import './App.css';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  return (
    <div className="App">
      <h1>Welcome to Happy Feet App</h1>
      <Routes>
        <Route path='/' element={<Login setLoggedInUser={setLoggedInUser} />} />
        {loggedInUser && (
          <Route path='/dashboard' element={<Dashboard loggedInUser={loggedInUser} />} /> 
        )} 
        {loggedInUser && (
          <Route path='/add-recommendation' element={<Recommendation loggedInUser={loggedInUser} />} /> 
        )}
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
