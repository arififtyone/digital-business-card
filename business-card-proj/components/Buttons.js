import React from "react"

export default function Buttons() {
    return (
        <div className="container">
            <div className="buttons">
                <a href="mailto:ariana.guilak@gmail.com" target="_blank" rel="noopener noreferrer" className="button-link">
                    <button className="mail-button">
                        <img className="icon" src="./objects/mail.png"></img>
                        <span className="email-text">Email Me</span>
                    </button>
                </a>
                <a href="http://linkedin.com/in/ariana-guilak/" target="_blank" rel="noopener noreferrer" className="button-link">
                    <button className="linkedin-button">
                        <img className="icon" src="./objects/linkedin.png"></img>
                        <span className="linkedin-text">LinkedIn</span>
                    </button>
                </a>
            </div>
        </div>
    )
}