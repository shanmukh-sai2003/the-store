import React from "react";
import './Header.css';
import NavBar from "./NavBar";
import LandingPageRow from "./LandingPageRow";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <NavBar></NavBar>
                <LandingPageRow></LandingPageRow>
            </div>
        </div>
    )
}

export default Header;