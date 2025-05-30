import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

function NZHolidaysList(){
    const [holidays, setHolidays] = useState([])

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/publicholidays/2025/NZ')
        .then(response => setHolidays(response.data))
        .catch(err => console.error('Error loading countries', err));
    }, [] );

    return (
        <div>
            <h1>Holidays List:</h1>
            {holidays.map(holiday => (
                <h4 key={holiday.date}>
                    {holiday.date} - {holiday.name}
                </h4>
                
            ))}

        </div>
    )
}

export default NZHolidaysList