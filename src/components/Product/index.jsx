import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StarRating from '../Rating';

const Product = (props) => {

    const [products, setProduct] = useState("");

    useEffect(() => {
        axios.get(`https://localhost:5001/api/products/all-product`)
            .then(res => {
                setProduct(res);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <div className="col-4 card">
                    <img src="images/product-1.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <StarRating />
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-2.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-3.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-4.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 card">
                    <img src="images/product-5.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-6.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-7.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-8.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-9.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-10.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-11.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4 card">
                    <img src="images/product-12.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
        </div>
    );
}

export default Product;