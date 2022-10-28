import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Profile.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Profile({loggedInUser, setLoggedInUser}) {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [bio, setBio] = useState( '');
  const [photoUrl, setPhotoUrl] = useState( '');

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/users', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
  })
      .then(res => res.json())
      .then(res => {
          if (res.error) {
            console.error(res.error)
          } else {
            // when profile is saved navigate to dashboard page
            setLoggedInUser(res)
            navigate('/dashboard')
          }     
      })
  }

  //Update profile & Delete Profile
  // function updateBaker(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   const data = Object.fromEntries(new FormData(form))
  //   // console.log(data);
  //   userId = data.id;
  //   var userIndex = 0
  //   state.users.forEach((user, index) => {
  //     if (user.id == userId) {
  //         userIndex = index

  //     }
  // })



//   fetch(`/api/users/${bakerId}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
// })
//     .then(res => res.json())
//     .then(user => {
//       console.log(user)
//         state.users[bakerIndex] = user;
//         setLoggedInUser(res)
//         navigate('/dashboard')
        
//     })


  return (
    <div className="container-sm">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profile Page</h5>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label 
              className="form-label"
              htmlFor="profilename">Name:
              </label>
              <input 
              type="text"
              name="name"
              id="profilename" 
              className="form-control" 
              value={name}
              onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label 
              className="form-label"
              htmlFor="photo">Profile Image URL:</label>
              <input 
              type="text" 
              name="photoUrl"
              id="photo"
              value={photoUrl}
              onChange={e => setPhotoUrl(e.target.value)}
              className="form-control" 
              />
            </div>
            <div className="mb-3">
              <label 
              className="form-label"
              htmlFor="bio">Bio:
              </label>
              <input 
              type="text" 
              name="bio"
              id="bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="form-control" 
              />
            </div>
            <div className="mb-3">
              <button 
              // className="btn btn-primary"
              variant="outline-primary"        type="submit">Save Profile</button>{' '}
            </div>
            <input type="hidden" name="email" value={loggedInUser.email} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;
    