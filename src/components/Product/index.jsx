import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProductDetail } from '../productDetailSlice';
import StarRating from '../Rating';

const Product = (props) => {

    const [products, setProduct] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();;
    const goToProductDetailPage = (id) => {
        axios.get(`https://localhost:5001/api/products/${id}`)
            .then(res => {
                const action = addProductDetail(res.data);
                dispatch(action);
            })
            .catch(error => console.log(error));
            history.push(`/product-detail/${id}`);
    }

    useEffect(() => {
        axios.get(`https://localhost:5001/api/products/all-product`)
            .then(res => {
                setProduct(res.data.items);
            })
            .catch(error => console.log(error));
    }, []);

    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(products.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) => products.slice(idx * 4, idx * 4 + 4));
    console.log("🚀 ~ file: index.jsx ~ line 33 ~ Product ~ productRows", productRows)
    // map the rows as div.row
    const content = productRows.map((row, idx) => (
        <div className="row" key={idx}>
            { row.map((product, i) =>
                <div className="col-4 card">
                    <img src="images/product-1.jpg" onClick={() => goToProductDetailPage(product.id)} />
                    <h4>Red Printed T-shirt</h4>
                    <StarRating />
                    <p>$50.00</p>
                </div>)

            }
        </div>)
    );

    return (
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            {content}
            {/* <div className="row" >
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
            <div className="row"> */}
            {/* <div className="col-4 card">
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
                <div className="col-4 card"> */}
            {/* <img src="images/product-12.jpg" />
                    <h4>Red Printed T-shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                    </div>
                    <p>$50.00</p>
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default Product;