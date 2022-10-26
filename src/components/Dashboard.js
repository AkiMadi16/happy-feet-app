import { useState, useEffect } from 'react'
import './Dashboard.css'
// import Map from './Map.js';
import Places from './Places';
// import Profile from './Profile';
// import Recommendation from './Recommendation';
// import Navbar from './Navbar';
import { useNavigate } from "react-router-dom"

function Dashboard ({loggedInUser}) {
  let navigate = useNavigate();
  const { email, name } = loggedInUser;

  const [places, setPlaces] = useState(null)

  const getPlaces = () => {
    console.log('getPlaces')
    fetch('/api/allPlaces')
      .then(res => res.json())
      .then(res => setPlaces(res.places))
  }

  useEffect(() => {
    getPlaces()
  }, [])



  return (
  <div>
    <h1>Hello {name}</h1>
    <section>
      <div className='nav-bar'>
      {/* <Navbar /> */}
      </div>
       
      <div className="Places">
      <div className='mostpopular'>
       {/* <Map /> */}
       Most popular sites
     </div> 
        <Places places={places} />
        
        <div className='recommendations'>
       {/* <Recommendation /> */}

        <h2>recommendation section</h2>
        <button type='button' onClick={() => navigate('/add-recommendation')}>Add recommendation</button>
     </div> 
      </div>
   
     <div className='profile'>
      
        Profile section
       {/* <Profile /> */}
     </div>
     
    </section>
  </div>
  )
}

export default Dashboard;