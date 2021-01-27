import React, { useEffect } from 'react';
import CategoriesPage from '../CategoriesPage';
import FeatureProduct from '../FeatureProduct';
import Offer from '../Offer';
import Testimoial from '../Testimoial';
import Brand from '../Brand';

function Page(props) {
    // get Page State
    // dispatch to redux

    // get Page from API or dedux store
    useEffect(() => {

    }, [])



    return (
        <div>
            {/* -----------------featured categories --------------------- */}
            <CategoriesPage />
            {/* -----------------featured products --------------------- */}
            <FeatureProduct />
            {/* ----------- offer --------*/}
            <Offer />
            {/* ----------- testimoial --------*/}
            <Testimoial />
            {/* -------------------------------brands----------------------------- */}
            <Brand />
        </div>
    );
}

export default Page;