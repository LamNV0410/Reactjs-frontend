import React, { useState } from 'react';
import RatingSelected from './RatingSelected';

function StarRating(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleSetRatingValue = (value) => {
        setRating(value);
        // Post Rating
        // axios.get(`https://localhost:5001/api/products/${id}`)
        //     .then(res => {
        //         const action = addProductDetail(res.data);
        //         dispatch(action);
        //     })
        //     .catch(error => console.log(error));
        //     history.push(`/product-detail/${id}`);
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
                        key={i}
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