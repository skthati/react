import React from "react";
import { useState } from "react";

function TrackNumbers() {
    const [number, setNumber] = useState(0)

    function handleIncrease() {
        const intInput = parseInt(number, 10)
        return setNumber(intInput+1)
    }

    function handleDecrease() {
        const intInput = parseInt(number, 10)
        return setNumber(intInput-1)
    }

    function handleClear() {
        return setNumber(0)
    }

    return (
        <div>
            <div>
                <h1>{number}</h1>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div>
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
        </div>
        
    )
}

export default TrackNumbers