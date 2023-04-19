import React, { useState, useEffect } from 'react';
import TrendCard from './ItemCard';
import axios from 'axios';


function Trending(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens',{
            headers: {
                'X-RapidAPI-Key': '2cf1b14406msh60e1332e8d3acd5p13fbdbjsndc4bcdcb2b7e',
                'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(response => setPosts(response.payload.products))
        .catch(err => console.error(err));
    },[])

 
    const [menTrend, setTrendMen] = useState("trending-items")
    const [womenTrend, setTrendWomen] = useState("hide-items")
    const [kidsTrend, setTrendKids] = useState("hide-items")
    const [selectMen, setSelectMen] = useState("trend-select")
    const [selectWomen, setSelectWomen] = useState("")
    const [selectKids, setSelectKids] = useState("")
    


    function trendMen(){
        setTrendMen("trending-items")
        setTrendWomen("hide-items")
        setTrendKids("hide-items")
        setSelectMen("trend-select")
        setSelectWomen("")
        setSelectKids("")
    }

    function trendWomen(){
        setTrendWomen("trending-items")
        setTrendMen("hide-items")
        setTrendKids("hide-items")
        setSelectMen("")
        setSelectWomen("trend-select")
        setSelectKids("")
    }

    function trendKids(){
        setTrendKids("trending-items")
        setTrendMen("hide-items")
        setTrendWomen("hide-items")
        setSelectMen("")
        setSelectWomen("")
        setSelectKids("trend-select")
    }

    return (
        <>
            <div className="trending-top">
                <h1>Trending This Week</h1>
                <ul className="trend-category">
                    <li className={selectMen} onClick={trendMen}>Men</li>
                    <li className={selectWomen} onClick={trendWomen}>Women</li>
                    <li className={selectKids} onClick={trendKids}>Kids</li>
                </ul>
            </div>
            <div className={menTrend}>
                {posts.slice(0,4).map((item, i)=>{
                return (
                    <TrendCard　key={i} trendImg={item.image.url} trendTitle={item.productTitle} trendPrice={item.prices[0].regularPrice.minPrice}/>
                )
                })}
            </div> 
            <div className={womenTrend}>
                {posts.slice(4,8).map((item, i)=>{
                return (
                    <TrendCard　key={i} trendImg={item.image.url} trendTitle={item.productTitle} trendPrice={item.prices[0].regularPrice.minPrice}/>
                )
                })}
            </div> 
            <div className={kidsTrend}>
                {posts.slice(8,12).map((item, i)=>{
                return (
                    <TrendCard　key={i} trendImg={item.image.url} trendTitle={item.productTitle} trendPrice={item.prices[0].regularPrice.minPrice}/>
                )
                })}
            </div> 
        </>
    );
}

export default Trending;