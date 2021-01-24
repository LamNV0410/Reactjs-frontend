import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';
import StarRating from '../Rating';

function ProductDetail(props) {
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    const selector = useSelector(state => state.productDetail);
    
    useEffect(() => {
        setProduct(selector);
        console.log("🚀 ~ file: index.jsx ~ line 10 ~ useEffect ~ selector", selector)
    }, [selector]);


    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const valueAddToCart = {
            product,
            count
        };
    const action = addToCart(valueAddToCart);

        dispatch(action)
    }

    return (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src="images/product-1.jpg" width='100%' />
                    <div className='small-img-row'>
                        <div className='small-img-col'>
                            <img src='images/product-1.jpg' width='100%' />
                        </div>
                        <div className='small-img-col'>
                            <img src='images/product-1.jpg' width='100%' />
                        </div>
                        <div className='small-img-col'>
                            <img src='images/product-1.jpg' width='100%' />
                        </div>
                        <div className='small-img-col'>
                            <img src='images/product-1.jpg' width='100%' />
                        </div>


                    </div>


                </div>
                <div className="col-2">
                    <p>Home / T-Shirt</p>
                    <h1>{product.name}</h1>
                    <h4>${product.originalPrice}</h4>
                    <StarRating />
                    <select>
                        <option value="">Select Size</option>
                        <option value="">XXL</option>
                        <option value="">XL</option>
                        <option value="">M</option>
                        <option value="">L</option>
                    </select>

                    <input type="number" min={1} value={count} onChange={(e) => setCount(e.target.value)} />
                    <a
                        className='btn'
                        onClick={() => handleAddToCart()}
                    >
                        Add to Cart
                    </a>
                    <h3>Product Details <i className='fa fa-indent'></i></h3>
                    <p>{product.decription}!</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;