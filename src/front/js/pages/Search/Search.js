import React from 'react';

import { SearchResultSummary } from './SearchResultSummary';
import {SearchResults} from './SearchResults';

export const Search = () => {
    return(
        <div className="container-fluid">
           
            <SearchResultSummary />
            <SearchResults/>
        </div>
    )
};

