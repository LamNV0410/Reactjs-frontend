import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
    }
});

const
    { reducer,
        // actions
    }
        = product;
// export const { } = actions
export default reducer;