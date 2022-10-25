import './Dashboard.css'
import Login from './Login.js';
import Map from './Map.js';


function Dashboard () {
  const places = [
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

  return (
  <div>
    <section>
      <div className='nav-bar'>
        <Login />
        My navigation section
      </div>
       
      <div className="Places">
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
   
     <div className='recommendations'>
       <Map />
       Madie's recommendation section
     </div>
     
    </section>
  </div>
  )
}

export default Dashboard;