import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartDetail from '../CartDetail';

function Cart(props) {
    const { cart } = useSelector(state => state.carts);
    let sum = 0;
    const handleSumTotalCalc = (value) => {
    }

    useEffect(() => {

    })
    return (
        <div className="small-container cart-page">
            <table>
                <tbody><tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Subtotal
                    </th>
                </tr>
                    {cart && cart.map((product, i) => {
                        console.log(product.product)
                        sum += product.product.originalPrice * product.count;
                        console.log("🚀 ~ file: index.jsx ~ line 32 ~ {cart&&cart.map ~ product", product)

                        console.log("🚀 ~ file: index.jsx ~ line 32 ~ {cart&&cart.map ~ product.count", product.count)
                        return (
                            <CartDetail
                                key={i}
                                cartDetail={product}
                                handleSumTotal={handleSumTotalCalc}
                            />
                        )
                    })}
                </tbody>
            </table>
            <div className="total-price">
                <table>
                    <tbody><tr>
                        <td>Subtotal</td>
                        <td>{sum}.00</td>
                    </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${20}.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${sum + 20}.00</td>
                        </tr>
                    </tbody></table>
            </div>
        </div>

    );
}

export default Cart;