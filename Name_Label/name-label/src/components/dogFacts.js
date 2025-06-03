import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function DogFacts () {
    const [newFact, setNewFact] = useState("")

    // useEffect( () => {
    //     axios.get("https://dogapi.dog/api/v2/facts")
    //     .then(response => getNewFact(response.data.data[0].attributes.body))
    //     .catch(err => console.log("Unable to fetch data.", err));
    // }, [])
    useEffect(() => {
        axios.get("https://dogapi.dog/api/v2/facts")
        .then((response) => {
            const fact = response.data.data[0].attributes.body
            setNewFact(fact)
        })
        .catch(err => console.log("Cannot fetch data!", err))
    }, [])

    return (
        <div>
            <h2>{newFact}</h2>
        </div>
    )
}

export default DogFacts