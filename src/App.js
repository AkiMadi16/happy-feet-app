import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Dashboard from './components/Dashboard.js'
import SignUp from './components/SignUp.js'
import './App.css';
import Login from './components/Login.js';

// Create a client
const queryClient = new QueryClient()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

 
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">

      <h1>Welcome to Madie's Happy Feet App</h1>
      { isLoggedIn 
        ? (<Dashboard setIsLoggedIn={setIsLoggedIn}
        /> )
        : ( 
          <div>
          <Login setIsLoggedIn={setIsLoggedIn}
          
          />
            <div>
              <SignUp setIsLoggedIn={setIsLoggedIn}
              
              />
            </div>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
