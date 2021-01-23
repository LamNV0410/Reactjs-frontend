import React, { useEffect, useState } from 'react';
import RatingSelected from './RatingSelected';

function StarRating(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleSetRatingValue = (value) => {
        setRating(value);
    }

    const handleMouseLeave = (value) => {
        setHover(rating);
    }

    const handleMouseEnter = (value) => {
        setHover(value)
    }

    return (
        <div className="rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <RatingSelected
                        value={ratingValue}
                        classIsSelected={ratingValue <= (hover || rating) ? "fa fa-star" : "fa fa-star-o"}
                        setRatingValue={handleSetRatingValue}
                        setMouseEnter={handleMouseEnter}
                        setMouseLeave={handleMouseLeave}
                    />
                )

            })}
        </div>
    );
}

export default StarRating;