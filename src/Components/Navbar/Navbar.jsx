import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';



const Navbar = ({setShowLogin} ) => {
    const [menu,setMenu] = useState("home");
    return (
        <div>
            <div className='navbar'>
               <Link to='/'> <img src={assets.logo} alt="Website Logo" className='logo' /></Link>
                <ul className="navbar-menu">
                    <a onClick={()=>setMenu("home")} className={menu==="home"?"active":""} href="#home">Home</a>
                    <li><a onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}href="#explore-menu">Menu</a></li>
                    <li><a onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}href="#app-download">Mobile App</a></li>
                    <li><a onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}href="#footer">Contact Us</a></li>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="Search Icon" className="search-icon" />
                    <div className="navbar-search-icon">
                        <Link to="/cart"><img  src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div className="dot"></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
