import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckFast, faCreditCard, faMoneyBillTransfer, faHeadset} from '@fortawesome/free-solid-svg-icons';


function Feature(){
    return (
        <>
            <div className="features">
                <div className="feature-card">
                    <FontAwesomeIcon icon={faTruckFast} size="3x"/>
                    <h3>Fast & Free Delivery</h3>
                    <p>Free delivery on all orders</p>
                </div>
                <div className="feature-card">
                    <FontAwesomeIcon icon={faCreditCard} size="3x"/>
                    <h3>Secure Payment</h3>
                    <p>pay with perfect security</p>
                </div>
                <div className="feature-card">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} size="3x"/>
                    <h3>Money Back Guarantee</h3>
                    <p>easy return</p>
                </div>
                <div className="feature-card">
                    <FontAwesomeIcon icon={faHeadset} size="3x"/>
                    <h3>Online Support</h3>
                    <p>support 24h</p>
                </div>
            </div>
        </>
    );
}

export default Feature;