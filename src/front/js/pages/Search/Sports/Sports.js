import React from 'react';


import {SportResults} from '../Sports/SportResults';
import { Controlbar } from '../../../component/controlbar';

import{SearchResultSummary} from '../SearchResultSummary';
export const Sports = () => {
    return(
        <div className="container-fluid">
        <Controlbar/>
        <SportResults/>
        </div>
    )
};

