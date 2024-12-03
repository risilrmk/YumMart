import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({setShowLogin} ) => {
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
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
                    <div className="navbar-icon">
                        <Link to="/cart"><img  src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"} ></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
