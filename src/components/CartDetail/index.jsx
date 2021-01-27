import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function CartDetail(props) {
    let { count, product } = props.cartDetail;
    let { handleSumTotal } = props;
    const dispatch = useDispatch();
    const [countDetail, setCountDetail] = useState(0);

    const handleAddToCart = (value) => {
        const valueAddToCart = {
            product,
            count: value - count
        };
        const action = addToCart(valueAddToCart);
        setCountDetail(value);
        dispatch(action)
    }
    const [subTotal, setSubTotal] = useState(product.originalPrice);
    useEffect(() => {

        countDetail === 0 ? setSubTotal(product.originalPrice * count) : setSubTotal(product.originalPrice * countDetail);
        // handleSumTotal(subTotal);
    }, [countDetail, count, product.originalPrice])

    useEffect(() => {
        let sum = 0;
        sum += subTotal;
        handleSumTotal(sum);
    }, [subTotal, handleSumTotal])
    return (
        <tr>
            <td>
                <div className="cart-info">
                    <img src="/image/buy-1.jpg" alt='information' />
                    <div>
                        <p>{product.name}</p>
                        <small> Price : ${product.originalPrice}</small>
                        <a href>Remove</a>
                    </div>
                </div>
            </td>
            <td>
                <input
                    type="number"
                    min={1}
                    defaultValue={count}
                    onChange={(e) => handleAddToCart(e.target.value)}
                />
            </td>
            <td>
                ${
                    subTotal
                }.00
            </td>
        </tr>
    );
}

export default CartDetail;