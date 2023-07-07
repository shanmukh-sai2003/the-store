import React from "react";
import './LandingPageRow.css';

function LandingPageRow() {
    return (
        <div className="landingPageRow">
            <div className="col">
                <h1>FOR TITLE PURPOSE</h1>
                <p>FOR SUBTITLE PURPOSE</p>
                <a href="#btn" className="shopBtn">shop now</a>
            </div>

            <div className="col">
                <img src={require('../images/logo.png')} alt="logo-big"></img>
            </div>
        </div>
    )
}

export default LandingPageRow;