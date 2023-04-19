import React from 'react';
import Header from '../view/Header';
import Footer from '../view/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import ItemCard from '../view/ItemCard';

function Products(){

    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens',{
        headers: {
            'X-RapidAPI-Key': '2cf1b14406msh60e1332e8d3acd5p13fbdbjsndc4bcdcb2b7e',
            'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
        },
    })
	.then(response => response.json())
	.then(response => setPosts(response.payload.products))
	.catch(err => console.error(err));
    },[])

    const [genderOption, setGenderOption] = useState("none");
    const [categoryOption, setCategoryOption] = useState("none");
    const [sizeOption, setSizeOption] = useState("none");
    const [colorOption, setColorOption] = useState("none")

    const [gender, setGender] = useState("Gender");
    const [category, setCategory] =  useState("Category");
    const [size, setSize] = useState("Size");
    const [color, setColor] = useState("Color");

    function showGenderOption(){
        if(genderOption==="none"){
            setGenderOption("show")
        }else{
            setGenderOption("none");
        }
    }

    function showCategoryOption(){
        if(categoryOption==="none"){
            setCategoryOption("show")
        }else{
            setCategoryOption("none");
        }
    }

    function showSizeOption(){
        if(sizeOption==="none"){
            setSizeOption("show")
        }else{
            setSizeOption("none");
        }
    }

    function showColorOption(){
        if(colorOption==="none"){
            setColorOption("show")
        }else{
            setColorOption("none");
        }
    }

    function genderHandleClick(e){
        let getValue = e.target.innerText;
        setGender(getValue);
        setGenderOption("none")
    }

    function categoryHandleClick(e){
        let getValue = e.target.innerText;
        setCategory(getValue);
        setCategoryOption("none")
    }    

    function sizeHandleClick(e){
        let getValue = e.target.innerText;
        setSize(getValue);
        setSizeOption("none")
    }    

    function colorHandleClick(e){
        let getValue = e.target.innerText;
        setColor(getValue);
        setColorOption("none")
    }    


    return(  
        <>
            <Header />
            <div className="heading">
                <h1>Women</h1>
            </div>
            <div className="products-body">
                <div className="products-filter">
                <div className="filter-category filter-dropDown" onClick={showGenderOption}>
                    <p>{gender}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="filter-icon" />
                </div>
                <div className={genderOption}>
                        <ul>
                            <li onClick={genderHandleClick}>All</li>
                            <li onClick={genderHandleClick}>Men</li>
                            <li onClick={genderHandleClick}>Women</li>
                            <li onClick={genderHandleClick}>Kids</li>
                        </ul>
                </div>
                <div className="filter-type filter-dropDown" onClick={showCategoryOption}>
                    <p>{category}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="filter-icon"/>
                </div>
                <div className={categoryOption}>
                        <ul>
                            <li onClick={categoryHandleClick} className="option">All</li>
                            <li onClick={categoryHandleClick} className="option">Tops</li>
                            <li onClick={categoryHandleClick} className="option">Bottoms</li>
                            <li onClick={categoryHandleClick} className="option">Accessory</li>
                        </ul>
                </div>
                <div className="filter-size filter-dropDown" onClick={showSizeOption}>
                    <p>{size}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="filter-icon"/>
                </div>
                <div className={sizeOption}>
                        <ul>
                            <li onClick={sizeHandleClick} className="option">All</li>
                            <li onClick={sizeHandleClick} className="option">XS</li>
                            <li onClick={sizeHandleClick} className="option">S</li>
                            <li onClick={sizeHandleClick} className="option">M</li>
                            <li onClick={sizeHandleClick} className="option">L</li>
                            <li onClick={sizeHandleClick} className="option">XL</li>
                        </ul>
                </div>
                <div className="filter-color filter-dropDown" onClick={showColorOption}>
                    <p>{color}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="filter-icon"/>
                </div>
                <div className={colorOption}>
                        <ul>
                            <li onClick={colorHandleClick} className="option">All</li>
                            <li onClick={colorHandleClick} className="option">Black</li>
                            <li onClick={colorHandleClick} className="option">White</li>
                            <li onClick={colorHandleClick} className="option">Red</li>
                            <li onClick={colorHandleClick} className="option">Blue</li>
                            <li onClick={colorHandleClick} className="option">Green</li>
                        </ul>
                </div>
                </div>
                <div className="products-details">
                    {posts.map((item, i)=>{
                        return (
                        <ItemCard　key={i} trendImg={item.image.url} trendTitle={item.productTitle} trendPrice={item.prices[0].regularPrice.minPrice }/>
                    )})}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;