import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../reduxFeatures/blogsSlice';

export const store = configureStore({
  reducer: { blogs: blogsReducer },
});
