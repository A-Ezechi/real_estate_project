import { useContext } from "react"
import { PropertyContext } from "../components/context"

const Body = () => {

  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useContext(PropertyContext) must be used within a Provider");
  }

  const {handleSearch, location, setLocation, minPrice, setMinPrice, maxPrice, setMaxPrice} = context;
  
  return (
    <div className="body">
      <h1 className="headline">Find Your Dream Place, You Deserve It</h1>

      <p className="introText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic architecto quaerat laboriosam obcaecati excepturi reprehenderit unde doloribus dolores amet quia delectus doloremque quasi dicta officiis dolor magnam, nulla consequatur alias.</p>

      <div className="lettingType">
        <button className="buy">Buy</button>
        <button className="rent">Rent</button>
      </div>

      <div className="lettingForm">
        <form action="send" className="propertyForm" onSubmit={handleSearch}>

          <input type="text" placeholder="City Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
          <input type="text" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))}/>
          <input type="text" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>

          <button type="submit" 
          className="searchbtn"
          >Search</button>
        </form>
      </div>

      <div className="achievements">
        <div className="yearsOfExperience">
          <h3>25+</h3>
          <p>Years Of Experience</p>
        </div>
        <div className="awardsGained">
          <h3>300+</h3>
          <p>Awards Gained</p>
        </div>
        <div className="yearsOfExperience">
          <h3>3000</h3>
          <p>Properties Ready</p>
        </div>
      </div>
    </div>
  )
}

export default Body