import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const homePageUrl = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=7afeaa3fe681ffcd1d8eaea5ab4e6c6f/';
const homePageList = [];

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const resp = await axios.get(homePageUrl);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const homePageSlice = createSlice({
  name: 'data',
  initialState: homePageList,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchData.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          date: element[1].date,
          symbol: element[1].symbol,
          reportedCurrency: element[1].reportedCurrency,
          fillingDate:element[1].fillingDate,
          acceptedDate:element[1].acceptedDate,
          calendarYear:element[1].calendarYear,
          revenue:element[1].revenue,
          costOfRevenue:element[1].costOfRevenue,
          grossProfit:element[1].grossProfit,
          grossProfitRatio:element[1].grossProfitRatio,
          researchAndDevelopmentExpenses:element[1].researchAndDevelopmentExpenses,
        });
      });
      return newState;
    });
  },
});

export default homePageSlice.reducer;
