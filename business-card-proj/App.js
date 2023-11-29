import React from "react"
import About from "./components/About.js"
import Info from "./components/Info.js"
import Interests from "./components/Interests.js"
import Buttons from "./components/Buttons.js"
import IconBar from "./components/icon-bar.js"

export default function App() {
    return (
        <div className="container">
            <div className="card">
                <Info />
                <Buttons />
                <About />
                <Interests />
                <IconBar />
            </div>
        </div>       
    )
}