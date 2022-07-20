import React from 'react';
import {SearchResult} from './SearchResult';
import "../../../styles/SearchResults.css";


export const SearchResults = () => {

    return(
        <div className="search-results">
            <SearchResult/>
            <SearchResult/>
        </div>
    )
};