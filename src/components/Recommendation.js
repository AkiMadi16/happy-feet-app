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
            // when created post navigate to dashboard page
            navigate('/dashboard')
          }     
      })
  }
return(
    <div className="container-sm">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Share your adventures and learn from our global community</h5>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmlFor="adventure"
                className="form-label">Location:</label>
                <input 
                className="form-control" 
                type="text"
                name="address"
                id="adventure" required />
            </div>
            <div className="mb-3">
                  <label htmlFor="photo"
                  className="form-label">Experience Image URL:</label>
                  <input 
                  className="form-control" 
                  id="photo"
                  type="text" 
                  name="img"
                  required
                  />
            </div>
            <div className="mb-3">
                <label htmlFor="name"
                className="form-label">Description:</label>
                <input 
                className="form-control" 
                type="text"
                name="name"
                id="name"
                required
                />
            </div>
            <button 
              className='btn btn-primary'
              type="submit">Submit</button>
            <input type="hidden" name='userEmail' value={loggedInUser.email} />
            </form>
        </div>
    </div>
    </div>
)
}

// function deleteRecommendation(event) {
//   const deleteBtn = event.target
//   const placeDOM = deleteBtn.closest('.places')
//   const placeId = placeDOM.dataset.id;

// }

export default Recommendation;