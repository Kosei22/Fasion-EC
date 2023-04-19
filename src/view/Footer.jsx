import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faVest } from '@fortawesome/free-solid-svg-icons'; 

function Footer(){
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>Subscribe Newsletter</h2>
                        <p>Subscribe newsletter to get 5% on all products.</p>
                    </div>
                    <div className="footer-middle">
                        <form action="subnit">
                            <input type="email" placeholder="Enter your email"/>
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className="footer-right">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" size="xl" />
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" size="xl" />
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" size="xl" />
                    </div>
                </div>
                <div className="footer-bottom">
                    <h1><FontAwesomeIcon icon={faVest} className="storeLogo"/> FUKUYA</h1>
                    <ul>
                        <h3>Shop Men</h3>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                    <ul>
                        <h3>Shop Women</h3>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                    <ul>
                        <h3>Shop Kids</h3>
                        <li>Clothing Fashion</li>
                        <li>Winter</li>
                        <li>Summer</li>
                        <li>Formal</li>
                        <li>Casual</li>
                    </ul>
                    <ul>
                        <h3>Quick Links</h3>
                        <li>Track Your Order</li>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Career</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>Copyright © 2023 FUKUYA.Inc. All rights reserved</p>
                </div>
            </div>
        </>
    );
}

export default Footer;