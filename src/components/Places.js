import React from 'react';
import './Places.css';

function Places({places, removePlace}) {

  console.log({places})

  if(!places) {
    return <div>No places</div>
  }

 return (
    <div className="places">
      <ul>
          {places.map((place, index) => (
            <li key={index}>
            <h1>{place.name}</h1>
            <img src={place.img} alt="" />
            <p>{place.address}</p>
            <button 
            type="button" 
            className="btn btn-outline-info" 
            onClick={() => removePlace(index)}>Delete</button>
          </li>
          ))}
        </ul> 
    </div>
  );
}

export default Places;