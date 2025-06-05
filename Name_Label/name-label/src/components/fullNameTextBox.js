import React from "react";
import { useState } from "react";
import ChildComponent from "./childComponent";

function FullnameTextbox() {
    const [firstname, setFirstname] = useState("sandeep")
    const [lastname, setLastname] = useState("thati")
    const [fullname, setFullname] = useState("")
    const [message, setMessage] = useState("")

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

    function handleButtonClick(){
        return setMessage(" Click from child!")
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
            
            <ChildComponent clickMessage={handleButtonClick} />
            { message && <h1>{message}</h1>}
            <h1>{fullname}</h1>
        </div>
    )
}

export default FullnameTextbox

