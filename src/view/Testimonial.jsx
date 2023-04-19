import React from 'react';
import ReactSwipe from 'react-swipe';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleLeft, faCircleRight} from '@fortawesome/free-regular-svg-icons';

let reactSwipeEl;

function Testimonial(){
    return(
        <>
            <div className="testimonialButton">
                <button onClick={() => reactSwipeEl.prev()} className="reviewPrevBtn">
                    <FontAwesomeIcon icon={faCircleLeft} size="3x"/>
                </button>
                <button onClick={() => reactSwipeEl.next()} className="reviewNextBtn">
                    <FontAwesomeIcon icon={faCircleRight} size="3x"/>
                </button>
            </div>
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}} ref={el=> {reactSwipeEl=el}}>
                <div className="testimonial">
                    <div className="reviewBackground">
                        <img src="./image/testimonial.svg" alt="" />
                    </div>
                    <div className="review">
                        <h2>Customer Testimonial</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit optio soluta sapiente voluptates possimus quod maiores inventore excepturi? Accusamus voluptas illo modi dicta deleniti eos voluptatum sint ipsa! Ducimus inventore sed incidunt. Quod eos tempora aliquam? Ipsam ad, voluptas minus tempore ipsum aperiam corrupti suscipit omnis ipsa tenetur ab corporis. Tempora, alias corrupti! Nesciunt beatae blanditiis esse culpa nobis magnam amet nam ullam, soluta, maxime aut quae. Nulla, minus reiciendis.
                        </p>
                        <div className="user">
                            <img className="icon" src="./image/icon.jpeg" width="60px" height="70px"/>
                            <div className="userInfo">
                                <p className="userName">Test</p>
                                <p>Men / 26</p>
                            </div>
                        </div>   
                    </div>
                </div>
                
                <div className="testimonial">
                    <div className="reviewBackground">
                        <img src="./image/testimonial.svg" alt="" />
                    </div>
                    <div className="review">
                        <h2>Customer Testimonial</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam a consequuntur dolor libero obcaecati, in ipsa recusandae perferendis vitae at voluptatem similique. Obcaecati doloribus consectetur dolor velit impedit adipisci aspernatur, aut nesciunt minima quae numquam accusantium magnam similique sapiente debitis ex tempore ullam perspiciatis repellendus error culpa repellat laudantium. Omnis amet ab veritatis dolore vitae laudantium voluptas labore minima at.</p>   
                        <div className="user">
                            <img className="icon" src="./image/darvish.jpeg" width="60px" height="70px"/>
                            <div className="userInfo">
                                <p className="userName">Test</p>
                                <p>Men / 37</p>
                            </div>
                        </div> 
                    </div>  
                </div>
            </ReactSwipe>
        </>
    )
}

export default Testimonial;