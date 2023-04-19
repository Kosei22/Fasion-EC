import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faUser, faCartShopping, faVest} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <div className="header-top">
                <ul className="header-left">
                    <li>About Us</li>
                    <li>Privacy</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                </ul>
                <ul className="header-right">
                    <li>My Wishlist</li>
                    <li>Track Your Order</li>
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" size="xl" />
                    <FontAwesomeIcon icon={faTwitter} className="icon tw" size="xl"/>
                    <FontAwesomeIcon icon={faInstagram} className="icon ig" size="xl" />
                    <FontAwesomeIcon icon={faYoutube} className="icon yt" size="xl" />
                </ul>
            </div>
            <div className="header-bottom">
                <Link to="/">
                    <h2>
                        <FontAwesomeIcon icon={faVest} className="storeLogo"/>
                        FUKUYA
                    </h2>
                </Link>
                <ul className="menu">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Men"><li>Men</li></Link>
                    <Link to="/Women"><li>Women</li></Link>
                    <Link to="/Kids"><li>Kids</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                </ul>
                <ul className="menu-right">
                    <a><FontAwesomeIcon icon={faMagnifyingGlass} className="menu-icon" size="xl"/></a>
                    <a><FontAwesomeIcon icon={faUser} className="menu-icon" size="xl"/></a>
                    <a><FontAwesomeIcon icon={faCartShopping} className="menu-icon"size="xl"/></a>
                </ul>
            </div>
        </>
    );
}

export default Header;
