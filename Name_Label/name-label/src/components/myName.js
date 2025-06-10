import React, { useState } from "react";
// import { createContext } from "react";

// const nameContext = createContext();

function MyName(){
    const [myFName, setMyFName] = useState("Sandeep")
    return (
        <>
            <h1>{myFName}</h1>
            <input 
                type="text" 
                placeholder="Change Name:" 
                value={myFName}
                onChange={(e) => setMyFName(e.target.value)}
            />
        </>
    )
}

export default MyName