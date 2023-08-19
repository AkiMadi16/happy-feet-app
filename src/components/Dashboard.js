import { useState, useEffect } from "react";
import "./Dashboard.css";
import Map from "./Map.js";
import Places from "./Places";
import Profile from "./Profile";
import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  // const navigate = useNavigate();
  const [places, setPlaces] = useState(null);

  const getPlaces = () => {
    console.log("getPlaces");
    fetch("/api/allPlaces")
      .then((res) => res.json())
      .then((res) => setPlaces(res));
  };

  useEffect(() => {
    getPlaces();
  }, []);

  const removePlace = (indexOfImageClicked) => {
    const updatedPlaces = places.filter(
      (place, i) => i !== indexOfImageClicked
    );
    setPlaces(updatedPlaces);
  };

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <section className="dashboard container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="Places">
              <Map />
              <div className="recommendations">
                <Places places={places} removePlace={removePlace} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Profile loggedInUser={loggedInUser} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
