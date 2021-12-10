import SingleValue from "./SingleValue";
import FilterMonth from "./FilterMonth";

const MonthlyData = (props) => {
    const months = props.data;
    //const { acceptedRequests, loanReturnTime, budget, months } = props.data;
    return (
        <>
         <SingleValue title="Accepted Requests" value={ 1 } />
         <SingleValue title="Loan Return Time" value={ 2 } />
         <SingleValue title="Budget" value={ 3 } />
        
         <FilterMonth options={months}/>
         </>
     );
}
 
export default MonthlyData;
