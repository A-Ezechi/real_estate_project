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
}

interface ProviderProps {
    children: ReactNode;
}

export const PropertyContext = createContext <PropertyContextType | undefined>(undefined);

export const Provider = ({ children }: ProviderProps) => {
    const [properties, setProperties] = useState<any[]>([]);
    const [location, setLocation] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const fetchProperties: PropertyContextType['fetchProperties'] = async () => {
        try {
            const response = await axios.get(`/data/dummydata.json`);
            setProperties(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch properties.');
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <PropertyContext.Provider value={{ properties, location, setLocation, minPrice, setMinPrice, maxPrice, setMaxPrice, error, fetchProperties }}>
            {children}
        </PropertyContext.Provider>
    );
};