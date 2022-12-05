import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './details';

const reducers = combineReducers({
  data: dataReducer,
});

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default store;
