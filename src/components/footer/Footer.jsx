import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerRow">
                <div className="footerCol">
                    <h1>small subtitile</h1>
                    <p>general content must be written here.</p>
                </div>
                <div className="footerCol">
                    <img src={require('../images/logo.png')} alt="logo"></img>
                    <p>general content must be written here.</p>
                </div>
                <div className="footerCol">
                    <h3>Follow us</h3>
                    <ul>
                        <li><a href="#facebook">facebook</a></li>
                        <li><a href="#instagram">instagram</a></li>
                        <li><a href="#twitter">twitter</a></li>
                        <li><a href="#youtube">youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;