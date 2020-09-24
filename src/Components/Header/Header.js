import React from 'react';
import { Link } from 'react-router-dom';
import logoss from '../../logoss.png';
import './Header.css';



const Header = () => {
    return (
        <div className="header flex-container">
            <div className="nav">
                <img src={logoss} alt=""/>
                <input type="text" placeholder="Search your Destination..." name="search"></input>
            </div>
            <div className="nav links">
                <Link to="/">News</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <button><Link to="/login">Login</Link></button> 
            </div> 
        </div>
    );
};

export default Header;