import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'productDetail',
    initialState: [],
    reducers: {
        addProductDetail: (state, action) => {
            return action.payload
            // state = action.payload;
            // state.push(action.payload);
        }
    }
});

const { reducer, actions } = cart;
export const { addProductDetail } = actions
export default reducer;