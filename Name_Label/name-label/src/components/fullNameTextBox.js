import React from "react";
import { useState } from "react";

function FullnameTextbox() {
    const [firstname, setFirstname] = useState("sandeep")
    const [lastname, setLastname] = useState("thati")
    const [fullname, setFullname] = useState("")

    function handleClear() {
        setFirstname("")
        setLastname("")
        return 
    }

    function handleSubmit() {
        setFirstname(firstname.toUpperCase())
        setLastname(lastname.toUpperCase())
        return setFullname(`${firstname} ${lastname}`)
    }

    return (
        <div>
            
            <label>Enter Firstname: </label>
            <input 
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />

            <label>Enter Lastname: </label>
            <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                >Submit</button>
            <button
                onClick={handleClear}
                >Clear</button>
            
            <h1>{fullname}</h1>
        </div>
    )
}

export default FullnameTextbox

