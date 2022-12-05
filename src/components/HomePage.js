import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../redux/homePage';

const HomePage = (props) => {
    const dispatch = useDispatch();
    const {
        date, 
        symbol,
        reportedCurrency, 
        fillingDate,
        acceptedDate,
        calendarYear,
        revenue,
        costOfRevenue,
        grossProfit,
        grossProfitRatio,
        researchAndDevelopmentExpenses,
      } = props;
    const shouldFetch = useRef(true);
  
    useEffect(() => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        dispatch(fetchData());
      }
    }, []);
    const dataArr = useSelector((state) => state.data);
    if (dataArr.length > 0) {
      return (
        <div className="data-container">
        {date}
        {symbol}
        {reportedCurrency}
        {fillingDate}
        {acceptedDate}
        {calendarYear}
        {revenue}
        {costOfRevenue}
        {grossProfit}
        {grossProfitRatio}
        {researchAndDevelopmentExpenses}
        </div>
      );
    }
    return '';
}
HomePage.propTypes = {
    date: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    reportedCurrency: PropTypes.string.isRequired,
    fillingDate: PropTypes.string.isRequired,
    acceptedDate: PropTypes.string.isRequired,
    calendarYear: PropTypes.string.isRequired,
    revenue: PropTypes.string.isRequired,
    costOfRevenue: PropTypes.string.isRequired,
    grossProfit: PropTypes.string.isRequired,
    grossProfitRatio: PropTypes.string.isRequired,
    researchAndDevelopmentExpenses: PropTypes.string.isRequired,
  };

export default HomePage;