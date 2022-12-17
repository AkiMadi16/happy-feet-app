import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ loggedInUser, setLoggedInUser }) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          Hikr
          {loggedInUser && (
            <span className="navbar-greeting">
              {`Hello, `}
              {loggedInUser.name}
              {` 👋`}
            </span>
          )}
        </div>
        <div className="d-flex">
          {loggedInUser && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setLoggedInUser(null)}
            >
              Log out
            </button>
          )}
          {!loggedInUser && (
            <div className=" d-flex">
              <Link className="btn btn-primary me-2" to={"/login"}>
                Login
              </Link>
              <Link className="btn btn-success" to={"/signup"}>
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
