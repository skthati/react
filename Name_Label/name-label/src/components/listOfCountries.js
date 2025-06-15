import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function ListOfCountries() {
    const [ fullCountriesList, setFullCountriesList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/AvailableCountries`)
        .then((response) => {
            setFullCountriesList(response.data);
            setIsLoading(false);
        })
        .catch(() => {
            setError("Error fetching data");
            setIsLoading(false);
        })
    }, [])

    const handleHolidayClick = (country_code) => {
        navigate(`/list-of-holidays/${country_code}`)
    }

    if (isLoading) return <p>Loading the list</p>
    if (error) return <p> Error: {error} </p>

    return (
        <>
            <h1>List of Countries</h1>
            <hr></hr>

            { fullCountriesList.map((country) => (
                <li key={country.countryCode}>
                    {country.name}
                    <button onClick={() => handleHolidayClick(country.countryCode)}>
                        View Holidays
                    </button>
                </li>
            ))}

        </>

    )
}

export default ListOfCountries