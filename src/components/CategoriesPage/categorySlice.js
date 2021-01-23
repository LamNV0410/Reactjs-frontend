import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        saveCategories: (state, action) => {
            state.push(action.payload);
        }
    }
});

const { reducer, actions } = category;
export const { saveCategories } = actions
export default reducer;