import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

export interface PropertyContextType {
    properties: any[];
    location: string;
    setLocation: (location: string) => void;
    minPrice: number;
    setMinPrice: (minPrice: number) => void;
    maxPrice: number;
    setMaxPrice: (maxPrice: number) => void;
    error: string | null;
    fetchProperties: () => Promise<void>;
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
    filteredState: Property[];
    handleFilter: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface Property {
    id: number
    title: string
    address: string
    images: string 
    bedroom: number
    bathroom: number
    price: number
}

interface ProviderProps {
    children: ReactNode;
}

export const PropertyContext = createContext <PropertyContextType | undefined>(undefined);

export const Provider = ({ children }: ProviderProps) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredState, setFilteredState] = useState<Property[]>(properties)
    const [location, setLocation] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);


    const fetchProperties: PropertyContextType['fetchProperties'] = async () => {
        try {
            const response = await axios.get(`/data/dummydata.json`);
            console.log('Raw API Data:', response.data)

            if (Array.isArray(response.data)){
                setProperties(response.data);
                setFilteredState(response.data)
                console.log('Fetched Properties:', response.data)
            } else {
                throw new Error('Fetched Data is not an array')
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch properties.');
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const filtered = properties.filter((filteredProperties: Property) => {
          return (
            filteredProperties.address.includes(location)
          )
        }
    )
    setFilteredState(filtered)
}

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Location: ${location}, minPrice: ${minPrice}, MaxPrice: ${maxPrice}`)
        setLocation('')
        setMinPrice(0)
        setMaxPrice(0)
    }

    return (
        <PropertyContext.Provider value={{ properties, location, setLocation, minPrice, setMinPrice, maxPrice, setMaxPrice, error, fetchProperties, handleSearch, filteredState, handleFilter }}>
            {children}
        </PropertyContext.Provider>
    );
};