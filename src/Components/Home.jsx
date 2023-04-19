import React from 'react';
import Header from '../view/Header';
import Heading from '../view/Heading';
import Category from '../view/Category';
import Trending from '../view/Trending';
import Testimonial from '../view/Testimonial';
import Feature from '../view/Feature';
import Footer from '../view/Footer';

function Home(){
    return (
        <>
          <Header />
          <Heading />
          <Category />
          <Trending />
          <Testimonial />
          <Feature />
          <Footer />
        </>
      );
}

export default Home;