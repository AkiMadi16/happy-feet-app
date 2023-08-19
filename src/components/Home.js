import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Home({ loggedInUser, setLoggedInUser }) {
  // const navigate = useNavigate();

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <div className="container intro">
        <h1>
          It's time to <br /> adventure
        </h1>
        <p>Join and enjoy the fun!</p>
        <Link className="btn btn-lg btn-success" to={"/signup"}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Home;
