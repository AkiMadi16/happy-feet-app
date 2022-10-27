import { useNavigate } from "react-router-dom"
import './Profile.css';


function Profile({loggedInUser}) {
  let navigate = useNavigate();

const handleOnSubmit = async (event) => {
  event.preventDefault()
  
  const form = event.target

  const data = Object.fromEntries(new FormData(form))
  // console.log(data)

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
          // when created profile navigate to dashboard page
          navigate('/dashboard')
        }     
    })
}

  return (
    <div className="Profile">
      <div>
      <h1>Profile Page</h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="profilename">Profile Name:</label>
            <input 
            type="text"
            name="name"
            id="profilename" 
            />
          </div>
          <div>
            <label htmlFor="photo">Profile Image URL:</label>
            <input 
            type="text" 
            name="photoUrl"
            id="photo"
            />
          </div>
          <div>
            <label htmlFor="bio">Bio:</label>
            <input 
            type="text" 
            name="bio"
            id="bio"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <input type="text" name='userEmail' value={loggedInUser.email} />
        </form>
      </div>
    </div>
  )
}

export default Profile;
    