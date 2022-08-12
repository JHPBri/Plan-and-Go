import React from 'react';
import "../../../styles/SearchResult.css";
import { BusinessRating } from '../../component/BusinessRating';
export const SearchResult = () => {
    return(
        <div className='search-result'>
            <img src='https://via.placeholder.com/210' alt="business" className='business-image'></img>
            <div className="business-info">
                <h2 className='subtitle'>Burger Place</h2>
                <BusinessRating/>
                <p>$$ <span class='tag'>Burgers</span> <span class='tag'>Fast Food</span></p>
            </div>
            <div className='contact-info'>
                <p>+000000000</p>
                <p>Street Address</p>
                <p>12345</p>
                <p>City Name</p>
            </div>
        </div>

    )
}