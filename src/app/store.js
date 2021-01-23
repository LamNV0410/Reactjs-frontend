import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/productSlice';
import categoryReducer from '../components/CategoriesPage/categorySlice'
const rootReducer = {
  products: productReducer,
  categories: categoryReducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;