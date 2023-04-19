import React from 'react';
import { Link } from 'react-router-dom';

function TrendCard(props){
    return (
        <>
            <Link className="itemCard" to="/details">
                <img src={props.trendImg} alt="" width="230px" height="250px"/>
                <p>{props.trendTitle}</p>
                <p>$ {props.trendPrice}</p>
            </Link>
        </>
    );
}

export default TrendCard;