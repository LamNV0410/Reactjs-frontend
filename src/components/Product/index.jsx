import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StarRating from '../Rating';

const Product = (props) => {

    const [products, setProduct] = useState("");
    const history = useHistory();
    const goToProductDetailPage = (id) => {
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
                <div key={i} className="col-4 card">
                    <img src="images/product-1.jpg" 
                    alt="infomation"
                    onClick={() => goToProductDetailPage(product.id)} />
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
        </div>
    );
}

export default Product;