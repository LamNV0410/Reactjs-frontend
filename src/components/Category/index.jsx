import React from 'react';

function Category(props) {
    return (
        <div className="col-3">
            <img src={props.category.urlImage} alt='information' />
        </div>
    );
}

export default Category;