// import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Users.css'

function Recommendation({loggedInUser}) {
  let navigate = useNavigate();


  const handleOnSubmit = async (event) => {
    event.preventDefault()
    
    const form = event.target

    const data = Object.fromEntries(new FormData(form))
    // console.log(data)
  
    fetch('/api/allPlaces', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
  })
      .then(res => res.json())
      .then(res => {
          if (res.error) {
            console.error(res.error)
          } else {
            // when signed up navigate to log in page
            navigate('/dashboard')
          }     
      })
  }
return(
  <div>
        <h3>Share your adventures and learn from our global community</h3>
      <form onSubmit={handleOnSubmit}>
       <div>
          <label htmlFor="adventure">Location:</label>
          <input 
          type="text"
          name="address"
          id="adventure" required />
       </div>
       <div>
            <label htmlFor="photo">Experience Image URL:</label>
            <input 
            id='photo'
            type="text" 
            name="img"
            required
            />
       </div>
       <div>
          <label htmlFor="name">Description:</label>
          <input 
          type="text"
          name="name"
          id="name"
          required
          />
         <button type="submit">Submit</button>
        </div>
        <input type="hidden" name='userEmail' value={loggedInUser.email} />
      </form>
    </div>
)
}

export default Recommendation;