import { useState, useEffect } from 'react'
import './Dashboard.css'
import Map from './Map.js';
import Places from './Places';
import Profile from './Profile';
import Recommendation from './Recommendation';
// import Navbar from './Navbar';
import { useNavigate } from "react-router-dom"

function Dashboard () {
  let navigate = useNavigate();

  const [places, setPlaces] = useState(null)

  const getPlaces = () => {
    console.log('getPlaces')
    fetch('/places')
      .then(res => res.json())
      .then(res => setPlaces(res.places))
  }



  return (
  <div>
    <section>
      <div className='nav-bar'>
      {/* <Navbar /> */}
      </div>
       
      <div className="Places">
      <div className='mostpopular'>
       <Map />
       Most popular sites
     </div> 

        
        <div>
           <Places />
        </div>
        <div className='recommendations'>
       <Recommendation />
        Madie's recommendation section
     </div> 
      </div>
   
     <div className='profile'>
      
       Madie's Profile section
       <Profile />
     </div>
     
    </section>
  </div>
  )
}

export default Dashboard;