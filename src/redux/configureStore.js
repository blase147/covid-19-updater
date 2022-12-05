import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './redux/homePage';

const store = configureStore({
  reducer: {
    data: homePageReducer,
  },
});
export default store;
