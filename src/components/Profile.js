import { useState } from 'react';
import './Profile.css';


function Profile() {
const [showProfile, setShowProfile]

const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log('handle on change')
  
}



  return (
    <div className="Profile">
      <div>
      <h1>Hello! my Profile Page</h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="profilename">Profile Name</label>
            <input 
            type="text"
            name="profilename"
            id="name" 
            />
          </div>
          <div>
            <label htmlFor="profilephoto">Profile Image URL:</label>
            <input 
            type="text" 
            name="image"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile;
    