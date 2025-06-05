import React from "react";

function ChildComponent(props) {
    console.log(props.clickMessage)
    return (
        <button onClick={props.clickMessage}>Click from Child</button>
    )
}

export default ChildComponent