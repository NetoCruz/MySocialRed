import React from "react";
import "./Header.css"
import User from '../images/user.png'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function Header(){
    return(
        <div className="header--body">
        <p className="header--title">SocialRed</p>
        <div className="header--user">
        <Link to="/gallery">
        <img src='friends.png' alt=""  />
            </Link>
            <Link to="/feed">
             <img src='home.svg' alt="" className="icon"  />
            </Link>
            <img src='bell.png' alt="" className="icon"  />
            <Link to="/user">
            <img src={User} alt="user" className="icon"/>
            </Link>
           
        </div>
        </div>
    )
}