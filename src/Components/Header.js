import React from "react";
import "./Header.css"
import User from '../images/user.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header--body">
        <p className="header--title">SocialRed</p>
        <div className="header--user">
            <Link to="/feed">
            Home
            </Link>
            <p>User01</p>
            <img src={User} alt="user"/>
        </div>
        </div>
    )
}