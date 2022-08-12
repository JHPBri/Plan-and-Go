import React from 'react';

import {FoodResults} from '../Food/FoodResults';
import { Controlbar } from '../../../component/controlbar';

import{SearchResultSummary} from '../SearchResultSummary';
export const Food = () => {
    return(
        <div className="container-fluid">
        <Controlbar/>
        <FoodResults/>
        </div>
    )
};

