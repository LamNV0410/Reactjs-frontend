import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/productSlice';
import categoryReducer from '../components/CategoriesPage/categorySlice'
import cartReducer from '../components/cartSlice';
import productDetailReducer from '../components/productDetailSlice';
const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
  carts: cartReducer,
  productDetail: productDetailReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;