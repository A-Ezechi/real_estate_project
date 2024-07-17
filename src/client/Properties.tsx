import React, { useContext } from "react";
import { useEffect } from "react";
import Header from "./Header";
import { PropertyContext } from "../components/context";

const Properties = () => {
    const context = useContext(PropertyContext)

    if (!context) {
        throw new Error("useContext(PropertyContext) must be used within a Provider");
    }

    const { location } = context;

  return (
    <div className="properties">
        <Header />
        <h2>Search results for {location}</h2>
    </div>
  );
}

export default Properties;