import React, { useContext, useEffect } from "react";
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

    const { location, properties, fetchProperties } = context;

    useEffect(() => {
        fetchProperties()
    }, [])

  return (
    <div className="properties">
        <Header />
        <h2>Search results for {location}</h2>

        <form action="submit">
            <input type="text" placeholder='Location' required/>
            <div className="furtherFilters">
                <select name="lettingType" id="lettingType">
                    <option value="Rent">Rent</option>
                    <option value="Buy">Buy</option>
                </select>

                <input type="text" placeholder="MinPrice" />
                <input type="text" placeholder="MaxPrice" />
                <button>Search</button>
            </div>
        </form>

        <div className="productChoices">
            {properties.map((filteredProperties: Property, index) => (
                <div key={index} className="property">
                    <img src={filteredProperties.images} alt={filteredProperties.title} />
                    <h3>{filteredProperties.title}</h3>
                    <p>{filteredProperties.address}</p>
                    <p>{filteredProperties.price}</p>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Properties;