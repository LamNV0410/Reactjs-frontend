import React from 'react';

function Category(props) {
    return (
        <div className="col-3">
            <img src={props.category.urlImage} />
        </div>
    );
}

export default Category;