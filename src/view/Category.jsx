import React from 'react';
import CategoryCard from './CategoryCard';

function Category(){
    return (
        <>
            <div className="category">
                <CategoryCard 
                    categoryImage={"./image/men.jpeg"} 
                    categoryName="Men's"/>
                <CategoryCard 
                    categoryImage={"./image/women.jpg"} 
                    categoryName="Women's"/>
                <CategoryCard 
                    categoryImage={"./image/kids.jpeg"} 
                    categoryName="Kids"/>
            </div>   
        </>
    );
}

export default Category;
