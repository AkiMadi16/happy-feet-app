import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

function Profile({loggedInUser}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-3">
        {loggedInUser.photo_url && (
        <img src={loggedInUser.photo_url} alt="" className="photo"/>
        )}
        <h2>{loggedInUser.name}</h2>
        {loggedInUser.bio && (
        <p>{loggedInUser.bio}</p>
        )}
      </div>
      <button type="button" className="btn btn-outline-info" onClick={() => navigate("/edit-profile")}><FontAwesomeIcon icon={ faUser }/> Edit profile</button>
    </div>
  )
}

export default Profile;