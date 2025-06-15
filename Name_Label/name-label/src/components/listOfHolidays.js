import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const presentYear = new Date().getFullYear()

function ListOfHolidays () {
    const [ fullHolidaysList, setFullHolidaysList] = useState([])
    const [ isLoading, setIsLoading] = useState(false)
    const [ error, setError] = useState(null)
    const { countryCode } = useParams()
    const navigate = useNavigate()
    const [year, setYear] = useState(presentYear)
    const [allYears, setAllYears] = useState([])




    useEffect(() => {
        const fetchHolidays = async (selectedYear) => {
            try {
                    setIsLoading(true)
                    setError(null)
                    const response = await axios.get(
                        `https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/${countryCode}`
                    )
                    setFullHolidaysList(response.data);
            } catch (err) {
                setError("Error fetching data")
            } finally {
                setIsLoading(false);
            }
        }

        if ( countryCode && year ) {
            fetchHolidays ( year)
        }

    }, [year, countryCode])

    useEffect(() => {
    const years = [];
    for (let i = presentYear - 5; i <= presentYear + 5; i++) {
        years.push(i);
    }
    setAllYears(years); // ✅ Set state once
    }, []);

    return (
        <>
            <h1>List Of Holidays</h1>
            <hr></hr>
            <select
                type="select"
                value={year}
                onChange={(e) =>  setYear(e.target.value)}
            >
                <option value="" key="">--SELECT--</option>
                { allYears.map((year) => (
                    <option key={year}>{year}</option>
                ))}
            </select>
            <p>You selected: <strong>{year}</strong></p>

            <hr></hr>
            { isLoading && <p>Loading list...</p>}
            { error && <p>Error while loading...</p>}
            { !isLoading && !error && (
                fullHolidaysList?.map((holiday) => (
                    <h4 key={Math.floor(Math.random() * 1000)}>
                        {holiday.date} - {holiday.name}
                    </h4>
                ))
            )}
            { }
            <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Go Back</button>
            
        </>

    )
}

export default ListOfHolidays