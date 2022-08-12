import React from 'react';

import { Controlbar } from '../../../component/controlbar';
import {ArtResults} from './ArtResults';

export const Art = () => {
    return(
        <div className="container-fluid">
        <Controlbar/>
        <ArtResults/>
        </div>
    )
};

