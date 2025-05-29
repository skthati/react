import React, { useState } from 'react'

function MyCounter() {
    const [countValue, setCountValue] = useState(0)

    function increaseCount() {
        return setCountValue(countValue+1)
    }
    
    function decreaseCount() {
        return setCountValue(countValue-1)
    }

    return ( 
        <div>
            
            <h1>{ countValue }</h1>
            <button onClick={ increaseCount }>+</button>
            <button onClick={ decreaseCount }>-</button>
        </div>
    )
}

export default MyCounter