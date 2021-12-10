import SingleValue from "./SingleValue";
import FilterMonth from "./FilterMonth";
import { useState } from "react";
import React from "react";


const MonthlyData = (props) => {
    //const { acceptedRequests, loanReturnTime, budget, months } = props.data;
    const months = props.data.map(month => month.month);
    const [fecha, setFecha] = useState(''); 

    const [monthState,handleChange] = useState("")

    return (
        <>
         <SingleValue title="Accepted Requests" value={ 1 } />
         <SingleValue title="Loan Return Time" value={ 2 } />
         <SingleValue title="Budget" value={ 3 } />
        
         <FilterMonth options={months} option={monthState} onSelectMonth={handleChange}/>
         </>
     );
}
export default MonthlyData;
