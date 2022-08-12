import React from "react";
import "../../styles/FeaturedCategories.css";
import Col from "react-bootstrap/Col";

export const FeaturedCategories = () =>{


    return (
        <Col>
            <div className='container'>
                <h1 className='header1'>Featured Categories</h1>
                <div className='category'>
                    <button className='category-btn'>
                    <div className='pallete'>
                        <a href="https://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io/Art"><i className="fa-solid fa-palette fa-2xl"></i></a>
                        <h2>Art</h2>
                    </div>
                    </button>

                    <button className='category-btn'>
                        <div className='sports'>
                            <a href="https://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io/Sports"><i className="fa-solid fa-basketball fa-2xl"></i></a>
                            <h2>Sports</h2>
                        </div>
                    </button>
                    
                    <button className='category-btn'>
                    <div className='music'>
                        <a href="https://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io/Music"><i className="fa-solid fa-music fa-2xl"></i></a>
                        <h2>Music</h2>
                    </div>
                    </button>

                    
                    <button className='category-btn'>
                    <div className='utensils'>
                        <a href="https://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io/food+drinks"><i className="fa-solid fa-utensils fa-2xl"></i></a>
                        <h2>Food + Drinks</h2>
                    </div>
                    </button>

                    <button className='category-btn'>
                    <div className="shopping">
                        <a href="https://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io/Shopping"><i className="fa-solid fa-bag-shopping fa-2xl"></i></a>
                        <h2>Shopping</h2>
                    </div>
                    </button>
                    
                </div>

            </div>
    </Col>
  );
};
