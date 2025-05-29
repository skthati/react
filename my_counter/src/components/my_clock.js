import React, { useState } from "react";

function MyClock() {
    const [timeNow, setTimeNow] = useState("")
    const [presentTime, setPresentTime] = useState("")
    const [tFlag, setTFlag] = useState(false)

    function GetTime() {
        const d = new Date()
        console.log(d)
        setTimeNow(d.getTime())
        console.log("Time is: " + timeNow)
        return timeNow
    }

    function PresentTime(myflag) {
        console.log(myflag)
        const currentTime = new Date(); // Get the current date and time

        // Format the time as hours:minutes:seconds
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        setTFlag(myflag);

        if (tFlag) {
            setPresentTime(`${hours}:${minutes}:${seconds}`)
            
        } 
        setTimeout(() => {}, 1000)

        return presentTime
    }

    return (
        <div>
            <h1>Time now: { timeNow } + { presentTime }</h1>
            <button onClick={ GetTime }>Get Time</button>
            <button onClick={ PresentTime(true) } >Present Time</button>
            <button onClick={ PresentTime(true) } >Start Clock</button>
            <button onClick={ PresentTime(false) } >Stop Clock</button>

        </div>
    )
}

export default MyClock
