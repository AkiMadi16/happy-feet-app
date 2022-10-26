// import { useQuery } from '@tanstack/react-query'
import './Places.css';

function Places() {
  const placesData = [
    {
      id: 1,
      name: "Mt Lofty Summit, Adelaide", 
      img: "./images/mountain-hiking.jpeg",
      address: ""
    },
    {
      id: 2,
      name: "Heysen Trail, South Australia", 
      img: "./images/top-hill-morning.jpeg",
      address: ""
    },
    {
      id: 3,
      name: "Yosemite National Park, California", 
      img: "./images/hiking-header.jpeg",
      address: ""
    },
    {
      id: 4,
      name: "Glacier National Park, Montana.", 
      img: "",
      address: ""
    },
    {
      id: 5,
      name: " Grand Canyon National Park, Arizona", 
      img: "",
      address: ""
    },
    {
      id: 6,
      name: "Everest Base Camp, Nepal.", 
      img: "",
      address: ""
    },
    {
      id: 7,
      name: "Milford Track, New Zealand", 
      img: "",
      address: ""
    }
  ];

  // const { isLoading, data } = useQuery(['quoteData'], () =>
  //   fetch('http://localhost:3001/places').then(res =>
  //     res.json()
  //   )
  // )

  // if (isLoading) {
  //   return <div>Loading....</div>
  // }

  return (
    <div className="places">
      <h1>{data?.places}</h1>
      <ul>
          {placesData.map((place, index) => (
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