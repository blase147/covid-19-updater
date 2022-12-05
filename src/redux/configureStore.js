import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './rockets';

const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});
export default store;
