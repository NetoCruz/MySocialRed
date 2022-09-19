import React from "react";
import "./Header.css"
import User from '../images/user.png'

export default function Header(){
    return(
        <div className="header--body">
        <p className="header--title">SocialRed</p>
        <div className="header--user">
            <p>User01</p>
            <img src={User} alt="user"/>
        </div>
        </div>
    )
}