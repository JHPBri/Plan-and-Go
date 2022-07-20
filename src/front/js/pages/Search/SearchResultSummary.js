import React from 'react';
import "../../../styles/SearchResultSummary.css";
export const SearchResultSummary = () => {

    return(
        <div className="container">
            <div className='search-summary'>
                <h1 className="subtitle"><strong>burgers</strong> berlin</h1>
                <p id="showing-results">showing 1-20 out of 543 results</p>
            </div>
        </div>
    )
};