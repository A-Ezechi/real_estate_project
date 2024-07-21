import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { PropertyContext } from "../components/context";

interface Property {
        id: number
        title: string
        address: string
        images: string 
        bedroom: number
        bathroom: number
        price: number
    }

const Properties = () => {

    const context = useContext(PropertyContext)

    if (!context) {
        throw new Error("useContext(PropertyContext) must be used within a Provider");
    }

    const { location, properties, fetchProperties, filteredState, handleFilter, setLocation } = context;

    useEffect(() => {
        fetchProperties()
    }, [])

  return (
    <div className="properties">
        <div className="propertiesInnerContainer">

            <Header />

            <h2>Search results for {location}</h2>

            <form action="submit" className="filtersForm" onSubmit={handleFilter}>

                <input type="text" 
                placeholder='Location' 
                required className="locationFilter"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />

                <div className="furtherFilters">

                    <select name="lettingType" id="lettingType">

                        <option value="Rent">Rent</option>
                        <option value="Buy">Buy</option>

                    </select>

                    <input type="text" placeholder="MinPrice (£)" className="minPrice" />
                    <input type="text" placeholder="MaxPrice (£)" className="maxPrice"/>

                    <div className="filterBtnContainer">

                        <button className="searchbtn">Search</button>

                    </div>
                </div>
            </form>
        </div>

        <div className="productChoices">
        
            {filteredState.map((filteredProperties: Property, index) => (

                <div key={index} className="property">

                    <img src={filteredProperties.images} alt={filteredProperties.title} />

                    <div className="productDescription">

                        <h3 className="propertyName">{filteredProperties.title}</h3>

                        <p className="propertyAddress">{filteredProperties.address}</p>

                        <p className="propertyPrice">£ {filteredProperties.price}</p>

                        <div className="btnContainer">

                            <button className="enquire">Enquire</button>

                        </div>
                    </div>
                </div>

            ))}

        </div>
    </div>
  );
}

export default Properties;