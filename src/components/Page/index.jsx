import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoriesPage from '../CategoriesPage';
import FeatureProduct from '../FeatureProduct';
import Offer from '../Offer';
import Testimoial from '../Testimoial';
import Brand from '../Brand';
import { useDispatch } from 'react-redux';

Page.propTypes = {

};

function Page(props) {
    // get Page State
    const [page, usePage] = useState();
   // dispatch to redux
   const dispatch = useDispatch(); 

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