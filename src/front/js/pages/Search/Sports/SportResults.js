import React from 'react';
import "../SearchResult";
import "./ArtResults.css"
import { BusinessRating } from '../../../component/BusinessRating';



export const SportResults = () => {
    
    return(
        <div className="search-results">
            <div className='search-summary'>
                <h1 className="subtitle"><strong>New York City</strong></h1>
                <p id="showing-results">showing 1-20 out of 543 results</p>
            </div>
        
            <div className='search-result'>
                <img src='https://via.placeholder.com/210' alt="business" className='business-image'></img>
                <div className="business-info">
                    <h2 className='subtitle'>New York Giants vs. Houston Texans</h2>
                    <BusinessRating/>
                    <p>$$ <span class='tag'>Football</span> <span class='tag'></span></p>
                </div>
                <div className='contact-info'>
                    <p>+000000000</p>
                    <p>Street Address</p>
                    <p>12345</p>
                    <p>City Name</p>
                </div>
            </div>
            <div className='search-result'>
                <img src='https://via.placeholder.com/210' alt="business" className='business-image'></img>
                <div className="business-info">
                    <h2 className='subtitle'>New York Jets vs. Chicago Bears</h2>
                    <BusinessRating/>
                    <p>$$ <span class='tag'>Football</span> <span class='tag'></span></p>
                </div>
                <div className='contact-info'>
                    <p>+000000000</p>
                    <p>Street Address</p>
                    <p>12345</p>
                    <p>City Name</p>
                </div>
            </div>
            
            
        </div>
    )
};