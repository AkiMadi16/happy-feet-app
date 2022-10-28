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
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard ({loggedInUser, setLoggedInUser}) {
  let navigate = useNavigate();
  const { email, name } = loggedInUser;

  // const handleOnLogout = (e) => {
  //   e.preventDefault()
  //   navigate('/Login')
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

  const removePlace = indexOfImageClicked => {
    const updatedPlaces = places.filter((place, i) => 
    i !== indexOfImageClicked)  
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
    <section className="dashboard">
      <div className="nav-bar">
        <button className="btn btn-secondary" onClick={() => setLoggedInUser(null)}>
        Log out
        </button>
      </div>

        {/* <button type="button" className="btn btn-primary"  onClick={() =>  navigate("/Login")}>LogOut</button> */}

        <div className="Places">
          <h1> Hikr </h1>
          <h5>Hello {name} </h5>
          <div className="mostpopular">
            Most popular sites
          <Map /> 
         </div> 
          <div className="recommendations"> 
            <Places places={places}  removePlace={removePlace}/>
            {/* <button 
            type="button" 
            className="btn btn-outline-info" 
            onClick={() => navigate("/dashboard")}>Delete</button> */}

            <div className="recommendations">
            {/* <Recommendation /> */}
              <h2>recommendation section</h2>
              <button 
              type="button" 
              className="btn btn-outline-info" 
              onClick={() => navigate("/add-recommendation")}><FontAwesomeIcon icon={faMountainSun} /> Add recommendation</button>
            </div> 
          </div>
        </div>

    <div className="profile">
      <button type="button" className="btn btn-outline-info" onClick={() => navigate("/edit-profile")}><FontAwesomeIcon icon={ faUser }/>Edit profile</button>
      {loggedInUser.photo_url && (
      <img src={loggedInUser.photo_url} alt="" roundedCircle/>
      )}
      <h2>{loggedInUser.name}</h2>
      {loggedInUser.bio && (
      <p>{loggedInUser.bio}</p>
      )}
    </div>
   </section>
  </div>
  )
}

export default Dashboard;