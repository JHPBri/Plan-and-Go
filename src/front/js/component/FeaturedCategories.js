import React from 'react';
import "../../styles/FeaturedCategories.css";
import Col from "react-bootstrap/Col";
export const FeaturedCategories = () =>{


    return (
        <div className='container'>
            <h1 className='header1'>Featured Categories</h1>
            <Col>
                <div>
                    <i class="fa-solid fa-palette fa-2xl"></i>
                    <h2>Art</h2>
                </div>
            </Col>
        </div>


    )
};