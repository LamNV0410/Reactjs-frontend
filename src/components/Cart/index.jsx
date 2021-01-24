import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {
    const { cart } = useSelector(state => state.carts);
    let total = 0;
    let tax = 200;
    // const [total, setTotal] = useState(0);
    console.log("🚀 ~ file: index.jsx ~ line 6 ~ Cart ~ cartValue", cart)
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
                        let { name, originalPrice } = product.product;
                        let { count } = product;
                        let simpleSubTotal = originalPrice * count;
                        total += simpleSubTotal;
                        return (
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src="image/buy-1.jpg" alt />
                                        <div>
                                            <p>{name}</p>
                                            <small> Price : ${originalPrice}</small>
                                            <a href>Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="number" min={1} defaultValue={product.count} />
                                </td>
                                <td>
                                    ${simpleSubTotal}.00
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="total-price">
                <table>
                    <tbody><tr>
                        <td>Subtotal</td>
                        <td>{total}</td>
                    </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${tax}.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${total - tax }.00</td>
                        </tr>
                    </tbody></table>
            </div>
        </div>

    );
}

export default Cart;