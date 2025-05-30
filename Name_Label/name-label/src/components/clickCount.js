import React, { useState } from "react";

function ClickCount(){
    const [countValue, setCountValue] = useState(0)

    function increaseCount(){
        return setCountValue(countValue+1)
    }

    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={ increaseCount }>+</button>
        </div>
    )
}

export default ClickCount