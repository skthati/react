import React from "react";
import { useState } from "react";

function YearSelector() {
    const [yearValue, setYearValue] = useState("")
    const [displayYear, setDisplayYear] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        setDisplayYear(yearValue)
    }

    return (
        <div>
            <h1>{displayYear}</h1>
            <form onSubmit={handleClick}>
                <label >Enter year: </label>
                <input 
                    type="text"
                    value={yearValue}
                    onChange={(e) => setYearValue(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default YearSelector