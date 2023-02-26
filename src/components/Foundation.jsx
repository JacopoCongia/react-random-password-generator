import React, { useState } from "react";
import Button from "./Button";
import characters from "../lettersData";

export default function Foundation() {
    const [passwords, setPasswords] = useState({passwordOne: "", passwordTwo: ""})
    
    function handleClick() {
        let firstPass = "";
        let secondPass = "";

        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            firstPass += characters[randomNumber]
            
        }
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            secondPass += characters[randomNumber]
            
        }
  
        setPasswords({passwordOne: firstPass, passwordTwo: secondPass})
    }
    
    
    return (
        <section className="foundation--main">
            <h1 className="foundation--title">Generate a <span>random password</span></h1>
            <h4 className="foundation--description">Never use an insecure password again.</h4>
            <Button handleClick={handleClick}/>
            <hr />
            <div className="foundation--passwords-container">
                <div className="foundation--password-one">{passwords.passwordOne}</div>
                <div className="foundation--password-two">{passwords.passwordTwo}</div>
            </div>
        </section>
    )
}