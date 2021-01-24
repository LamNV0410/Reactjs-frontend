import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')),
    },
    reducers: {
        addToCart: (state, action) => {
            let id = action.payload.product.id;
            let count = action.payload.count;
            var cart = JSON.parse(localStorage.getItem("cart"));
            if (cart == null) {
                localStorage.setItem('cart', JSON.stringify(action.payload));
            }
            else {
                var product = cart.find(x => x.product.id === id);
                if (product !== undefined && product !== null) {
                    product.count += count;
                }
                else {
                    cart.push(action.payload);
                }
                state.cart = cart;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
        // },
        // getCart: (state, action) => {
        //     state.cart =  JSON.parse(localStorage.getItem("cart")) ? [] : JSON.parse(localStorage.getItem("cart"));
        // }
    }
});

const { reducer, actions } = cart;
export const { addToCart } = actions
export default reducer;