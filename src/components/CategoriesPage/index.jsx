import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCategories } from '../CategoriesPage/categorySlice'
import Category from '../Category';

function CategoriesPage(props) {

    // save value in redux
    const dispatch = useDispatch();

    // save categories in state to use

    const [categories, setCategories] = useState([]);

    // call API get categories store
    useEffect(() => {
        // fake API respone;
        const categories =
            [
                { id: 1, name: 'category 1 ', urlImage: 'images/category-1.jpg' },
                { id: 2, name: 'category 2 ', urlImage: 'images/category-2.jpg' },
                { id: 3, name: 'category 3 ', urlImage: 'images/category-3.jpg' },
            ]
        const action = saveCategories(categories);
        dispatch(action);
        setCategories(categories);
    }, [dispatch])
    return (
        <div className="categories">
            <div className="small-container">
                <div className="row">
                    {
                        categories.map((item, index) => (
                            <div key={index} className="col-3">
                                <Category category={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;