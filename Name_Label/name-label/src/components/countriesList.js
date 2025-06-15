import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CountriesList(){
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/AvailableCountries')
        .then(response = setCountries(response.data))
        .catch(err => console.error("Unable to fetch data", err));
    }, [])

    return (
        <div>
            <h1>Countries List:</h1>
            { countries.map(country => (
                <h4 key={country.countryCode}> 
                    {country.countryCode} - {country.name}
                </h4>
            ))}
        </div>
    )
}

export default CountriesList