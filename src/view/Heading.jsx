import React from 'react';
import ReactSwipe from 'react-swipe';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleLeft, faCircleRight} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'

let reactSwipeEl;

function Heading(){
    return (
        <>
            <div className="button">
                <button onClick={() => reactSwipeEl.prev()} className="prevBtn">
                    <FontAwesomeIcon icon={faCircleLeft} size="3x"/>
                </button>
                <button onClick={() => reactSwipeEl.next()} className="nextBtn">
                    <FontAwesomeIcon icon={faCircleRight} size="3x"/>
                </button>
            </div>
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}} ref={el=> {reactSwipeEl=el}}>
                <div className="sale">
                    <div className="headImage">
                        <img src="./image/springSale.jpeg" alt="" />
                    </div>
                    <div className="saleContent">
                        <h2>Spring Sale</h2>
                        <h1>Save up to <span>70%</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sint saepe reiciendis
                        </p>
                        <Link to="/men">
                            <h3>Shop Now</h3>
                        </Link>
                    </div>
                </div>
                
                <div className="collab">
                    <div className="headImage">
                        <img src="./image/summer.jpeg" alt="" />
                    </div>
                    <div className="summerContent">
                        <h2>HELLO SUMMER</h2>
                        <h1>NEW COLLECTION</h1>
                        <Link to="/men">
                            <h3>Get Summer Style</h3>
                        </Link>
                    </div>
                </div>
            </ReactSwipe>
           </>
    );
}

export default Heading;
