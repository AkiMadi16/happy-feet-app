// import { useQuery } from '@tanstack/react-query'
import './Places.css';

function Places({places}) {

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
          </li>
          ))}
        </ul> 
    </div>
  );
}

export default Places;