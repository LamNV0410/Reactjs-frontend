import React from 'react';

function Cart(props) {
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
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="image/buy-1.jpg" alt />
                                <div>
                                    <p>Red Printed Tshirt</p>
                                    <small> Price : $50.00</small>
                                    <a href>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" defaultValue={1} />
                        </td>
                        <td>
                            $50.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="image/buy-1.jpg" alt />
                                <div>
                                    <p>Red Printed Tshirt</p>
                                    <small> Price : $50.00</small>
                                    <a href>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" defaultValue={1} />
                        </td>
                        <td>
                            $50.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="image/buy-1.jpg" alt />
                                <div>
                                    <p>Red Printed Tshirt</p>
                                    <small> Price : $50.00</small>
                                    <a href>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" defaultValue={1} />
                        </td>
                        <td>
                            $50.00
        </td>
                    </tr>
                </tbody></table>
            <div className="total-price">
                <table>
                    <tbody><tr>
                        <td>Subtotal</td>
                        <td>$200.00</td>
                    </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$200.00</td>
                        </tr>
                    </tbody></table>
            </div>
        </div>

    );
}

export default Cart;