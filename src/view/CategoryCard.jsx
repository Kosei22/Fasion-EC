import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryCard(props){

    const [shopBtn, setShopBtn] = useState("shopBtn");

    function appendBtn(){
        return (
            setShopBtn("")
        );
    }

    function removeBtn(){
        return (
            setShopBtn("shopBtn")
        );
    }


    return(
        <>
            <div className="categoryCard" onPointerOver={appendBtn} onPointerOut={removeBtn}>
                <img src={props.categoryImage} alt="" width="350" height="350"/>
                <h3>{props.categoryName} Fashion</h3>
                <Link to="/Men" className={shopBtn}>Shop Now</Link>
            </div>
        </>
    );
}

export default CategoryCard;