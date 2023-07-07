import React, { useState } from "react";
import "./NavBar.css"

function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false);

    function handleMenuClick() {
        setMenuClicked((prev) => !prev);
    }

    return (
        <div className="navBar">  
            <div className="navLogo">
                <img src={require("../images/logo.png")} alt="logo"></img>
            </div>
            <div className="nav">
                <ul className= {menuClicked ? "navMobile" : "navLinks"}>
                    <li><a href="#Help">Help</a></li>
                    <li><a href="#Products">Products</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
           </div>
           <img className="menuBtn" src={require('../images/menu.png')} alt="menu" onClick={handleMenuClick}></img>
        </div>
    )
}

export default NavBar;