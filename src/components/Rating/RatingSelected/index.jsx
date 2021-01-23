import React, { useEffect } from 'react';

function RatingSelected(props) {
    useEffect(()=>{
        console.log(props.classIsSelected);
    },[props.value])
    return (
        <i className={props.classIsSelected}
            onClick={() => props.setRatingValue(props.value)}
            onMouseEnter ={() => props.setMouseEnter(props.value)}
            onMouseLeave ={() => props.setMouseLeave(props.value)}
        />
    );
}

export default RatingSelected;