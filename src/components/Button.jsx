import React from "react";

export default function Button(props) {
 
    return (
        <button className="generate-passwords-btn" onClick={props.handleClick}>Generate Passwords</button>
    )
}