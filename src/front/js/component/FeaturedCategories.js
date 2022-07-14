import React from 'react';
import "../../styles/FeaturedCategories.css";

export const FeaturedCategories = () =>{


    return (
        <div className='container'>
            <h1 className='header1'>Featured Categories</h1>
            <div className='category'>
                <button className='category-btn'>
                <div className='pallete'>
                    <i class="fa-solid fa-palette fa-2xl"></i>
                    <h2>Art</h2>
                </div>
                </button>

                <button className='category-btn'>
                    <div className='sports'>
                        <i class="fa-solid fa-basketball fa-2xl"></i>
                        <h2>Sports</h2>
                    </div>
                </button>
                
                <button className='category-btn'>
                <div className='music'>
                    <i class="fa-solid fa-music fa-2xl"></i>
                    <h2>Music</h2>
                </div>
                </button>

                
                <button className='category-btn'>
                <div className='utensils'>
                    <i class="fa-solid fa-utensils fa-2xl"></i>
                    <h2>Food + Drinks</h2>
                </div>
                </button>

                <button className='category-btn'>
                <div className="shopping">
                    <i class="fa-solid fa-bag-shopping fa-2xl"></i>
                    <h2>Shopping</h2>
                </div>
                </button>
                
            </div>
        </div>


    )
};