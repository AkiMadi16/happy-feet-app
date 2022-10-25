import Dashboard from "./Dashboard";

function Places() {
  const dashboard = [
    {
      id: 1,
      name: "Mt Lofty Summit, Adelaide", 
      img: "./images/mountain-hiking.jpg",
      address: ""
    },
    {
      id: 2,
      name: "Heysen Trail, South Australia", 
      img: "../images/",
      address: ""
    },
    {
      id: 3,
      name: "Yosemite National Park, California", 
      img: "",
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
    <div className="Places">
      {dashboard.map((a,b) => 
        <Dashboard name={a.name} img={a.img} address={a.address}/>
      )}
    </div>
  );
}

export default Places;