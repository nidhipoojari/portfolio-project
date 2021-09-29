import React from "react"
import ReactTyped from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development</h1>
                <ReactTyped 
                className="typed-text"
                strings={["React Development", "PHP Development","Full Stack Development" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
        </div>
    )
}

export default Header
