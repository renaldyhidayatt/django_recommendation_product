import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import categorySlice from './category';
import userSlice from './user';
import productSlice from './product';
import sliderSlice from './slider';
import orderSlice from './order';

const store = configureStore({
  reducer: {
    authReducer: authSlice,
    categoryReducer: categorySlice,
    productReducer: productSlice,
    sliderReducer: sliderSlice,
    orderReducer: orderSlice,
    userReducer: userSlice,
  },
});

export default store;
