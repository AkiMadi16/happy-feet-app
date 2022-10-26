import { useState, useEffect } from 'react'
import './Dashboard.css'
import Map from './Map.js';
import Places from './Places';
// import Profile from './Profile';
import Recommendation from './Recommendation';
// import Navbar from './Navbar';
import { useNavigate } from "react-router-dom"

function Dashboard ({loggedInUser, setLoggedInUser}) {
  let navigate = useNavigate();
  const { email, name } = loggedInUser;

  // const onClick = (e) => {
  //   e.preventDefault()
  //   setLoggedInUser(false)
  //   // login in shows my dashboard
  // }

  const [places, setPlaces] = useState(null)

  const getPlaces = () => {
    console.log('getPlaces')
    fetch('/api/allPlaces')
      .then(res => res.json())
      .then(res => setPlaces(res))
  }

  useEffect(() => {
    getPlaces()
  }, [])



  return (
  <div>
    <h1>Hello {name} </h1>
    <section>
      <div className='nav-bar'>
      {/* <Navbar /> */}
      {/* <nav><button onClick={handleOnLogout}>logout</button></nav> */}
      <button type='button' className="btn btn-primary"  onClick={() =>  navigate('/Login')}>LogOut</button>
      </div>
       
      <div className="Places">
      <div className='mostpopular'>
          Most popular sites
       <Map />
      
     </div> 
        <Places places={places} />
        
        <div className='recommendations'>
       {/* <Recommendation /> */}
      
      
        <h2>recommendation section</h2>
        <i className="fa-solid fa-mountain-sun"></i>

        <button type='button' className="btn btn-outline-info" onClick={() => navigate('/add-recommendation')}>Add recommendation</button>
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