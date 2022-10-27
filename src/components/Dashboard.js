import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css'
import Map from './Map.js';
import Places from './Places';
import Profile from './Profile'
// import Navbar from './Navbar';
import { useNavigate } from "react-router-dom"

function Dashboard ({loggedInUser, setLoggedInUser}) {
  let navigate = useNavigate();
  const { email, name } = loggedInUser;

  const handleOnLogout = (e) => {
    e.preventDefault()
    navigate('/Login')
    // login in shows my dashboard
  }

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

  const removePlace = indexOfLayerClicked => {
    const updatedPlaces = places.filter((place, i) => 
    i !== indexOfLayerClicked)  
  setPlaces(updatedPlaces)  }


  // const handleOnLogout = async (e) => {
  //   e.preventDefault()
  //   setLoggedInUser(false)
  
  //   fetch('/api/sessions', {
  //     method: 'DELETE'
  //   })
  //   .then(() => {
  //     setError(null)
  //         setLoggedInUser(res)
  //         navigate('/login')
  //   })

 
  

  return (
  <div>
    <h1>Hello {name} </h1>
    <section>
      <div className='nav-bar'>
      {/* <Navbar /> */}
      <nav>
        <button 
        type='button' 
        className="btn btn-primary" 
        onClick={handleOnLogout}>logout</button>
      </nav>
      {/* <button type='button' className="btn btn-primary"  onClick={() =>  navigate('/Login')}>LogOut</button> */}
      </div>
       
      <div className="Places">
      <div className='mostpopular'>
          Most popular sites
       <Map />
      
     </div> 
        <Places places={places}  removePlace={removePlace}/>
        {/* <button 
        type="button" 
        className="btn btn-outline-info" 
        onClick={() => navigate('/dashboard')}>Delete</button> */}

        
        <div className='recommendations'>
       {/* <Recommendation /> */}
        <h2>recommendation section</h2>
        
        <button 
        type="button" 
        className="btn btn-outline-info" onClick={() => navigate('/add-recommendation')}><FontAwesomeIcon icon={faMountainSun} />Add recommendation</button>
     </div> 
      </div>
   
     <div className='profile'>
       {/* <Profile /> */}
       <button type='button' className="btn btn-outline-info" onClick={() => navigate('/add-profile')}><FontAwesomeIcon icon={ faUser }/>Add profile</button>
     </div>
     
    </section>
  </div>
  )
}

export default Dashboard;