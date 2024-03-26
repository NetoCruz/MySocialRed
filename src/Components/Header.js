import React from "react";
import "./Header.css"
import User from '../images/user.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header--body">
        <p className="header--title">SocialRed</p>
        <div className="header--user">
        <Link to="/gallery">
            Gallery
            </Link>
            <Link to="/feed">
            Home
            </Link>

            <Link to="/user">
            <img src={User} alt="user"/>
            </Link>
           
        </div>
        </div>
    )
}