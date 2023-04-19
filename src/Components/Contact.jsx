import React from 'react';
import Header from '../view/Header';
import Footer from '../view/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <>
            <Header/>
            <div className="heading">
                    <h1>Contact</h1>
            </div>
            <div className="contact">
                <div className="contact-form">
                    <form action="submit">
                        <h2>Get in Touch</h2>
                        <input type="text" placeholder="Message" className="contact-message"/>
                        <input type="text" placeholder="Name" className="contact-name" />
                        <input type="email" placeholder="Email" className="contact-email" />
                        <input type="text" placeholder="Subject" className="contact-subject" />
                        <button>Send</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="info-address">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faHouse} size="xl" />
                        </div>
                        <h4>Buttonwood, California.</h4>
                        <p>Rosemead, CA 91770</p>
                    </div>
                    <div className="info-number">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faPhone} size="xl" />
                        </div>
                        <h4>+1 253 565 2365</h4>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                    <div className="info-email">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" />
                        </div>  
                        <h4>support@fukuya.com</h4>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;