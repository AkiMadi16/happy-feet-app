import { useState } from 'react'
import './Users.css'

function Recommendation() {

  const [showPassword, setShowPassword] = useState(false)

const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log('hello')

}

  <div>
        <h3>Share your adventures and learn from our global community</h3>
      <form onSubmit={handleOnSubmit}>
       <div>
          <label htmlFor="location">Location:</label>
          <input 
          type="text"
          name="address"
          id="adventure" />
       </div>
       <div>
            <label htmlFor="photo">Experience Image URL:</label>
            <input 
            type="text" 
            name="image"
            />
       </div>
       <div>
          <label htmlFor="description">Description:</label>
          <input 
          type="text"
          name="description"
          id="experience"
          />
         <button type="submit">Submit</button>
        </div>
      </form>
    </div>
}

export default Recommendation;