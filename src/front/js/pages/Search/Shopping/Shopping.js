import React from 'react';


import {ShoppingResults} from '../Shopping/ShoppingResults';
import { Controlbar } from '../../../component/controlbar';

import{SearchResultSummary} from '../SearchResultSummary';
export const Shopping = () => {
    return(
        <div className="container-fluid">
        <Controlbar/>
        <ShoppingResults/>
        </div>
    )
};

