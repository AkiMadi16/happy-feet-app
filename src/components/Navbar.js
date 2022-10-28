import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navBar'> 
      <nav>
      <Link to="/Dashboard">Dashboard</Link>
      
      <Link to="/SignUp">SignUp</Link>
      <Link to="/Login">Login</Link>
        
        {/* <button onClick={toggleNav} className="btn">BTN</button> */}
      </nav>
    </div>
  )
}

export default Navbar;