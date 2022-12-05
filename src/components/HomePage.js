import React from "react";
import Details from "./Details";
import details from "../redux/details";

const HomePage = () => {
    const dispatch = useDispatch();
    const shouldFetch = useRef(true);
  
    useEffect(() => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        dispatch(fetchMissions());
      }
    }, []);
    const missionsArr = useSelector((state) => state.missions);
    if (missionsArr.length > 0) {
      return (
        <div className="missions-container">
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
  
    return (
        <div>
        <Details />
        </div>
    )

}

export default HomePage