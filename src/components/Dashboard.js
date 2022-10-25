import './Dashboard.css'
import Map from './Map.js';
import Places from './Places';
import Profile from './Profile';
import Recommendation from './Recommendation';
import Navbar from './Navbar';


function Dashboard () {
  

  return (
  <div>
    <section>
      <div className='nav-bar'>
      <Navbar />
        logOut
        My navigation section
      </div>
       
      <div className="Places">
      <div className='mostpopular'>
       <Map />
       Most popular sites
     </div> 

        
        <div>
           <Places />
        </div>
        <div className='recommendations'>
       <Recommendation />
        Madie's recommendation section
     </div> 
      </div>
   
     <div className='profile'>
      
       Madie's Profile section
       <Profile />
     </div>
     
    </section>
  </div>
  )
}

export default Dashboard;