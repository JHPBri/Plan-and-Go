import React from 'react';


import {MusicResults} from '../Music/MusicResults';
import { Controlbar } from '../../../component/controlbar';

import{SearchResultSummary} from '../SearchResultSummary';
export const Music = () => {
    return(
        <div className="container-fluid">
        <Controlbar/>
        <MusicResults/>
        </div>
    )
};

