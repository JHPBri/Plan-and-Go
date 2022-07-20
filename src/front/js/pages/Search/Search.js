import React from 'react';
import {Navbar} from '../../component/Navbar/navbar';
import {Controlbar} from '../../component/controlbar';
import { SearchResultSummary } from './SearchResultSummary';
import {SearchResults} from './SearchResults';

export const Search = () => {
    return(
        <div>
            <Navbar />
            <Controlbar />
            <SearchResultSummary />
            <SearchResults/>
        </div>
    )
};

