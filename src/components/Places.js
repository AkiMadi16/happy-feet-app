import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import './Places.css';

function Places({places, removePlace}) {
  const navigate = useNavigate();

  console.log({places})

  if(!places) {
    return <div>No places</div>
  }

 return (
    <div className="places">
      <div className="heading d-flex align-items-center justify-content-between">
          <h2>Recommendations</h2>
          <button 
            type="button" 
            className="btn btn-outline-info" 
            onClick={() => navigate("/add-recommendation")}><FontAwesomeIcon icon={faMountainSun} /> Add recommendation</button>
        </div>
      <ul className='places-list'>
        {places.map((place, index) => (
          <li key={index}>
          {/* <h1>{place.name}</h1>
          <img src={place.img} alt="" />
          <p>{place.address}</p>
          <button 
          type="button" 
          className="btn btn-outline-info" 
          onClick={() => removePlace(index)}>Delete</button>
            */}
            <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 place-image">
                <img src={place.img} className="img-fluid rounded-start" alt={place.name} />
              </div>
              <div className="col-md-8 place-info">
                <div className="card-body">
                  <h5 className="card-title">{place.name} a</h5>
                  <p className="card-text">{place.address}</p>
                  <p className="card-text"><small className="text-muted">Added 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Places;