import React from 'react';
import "../../styles/BusinessRating.css";
import Rating from 'react-rating';

export const BusinessRating = () => {

    return(
        <div className='rating'>
            <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            readonly
            initialRating={4}
            />
        </div>
    )
}