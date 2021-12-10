import SingleValue from "./SingleValue";
import FilterMonth from "./FilterMonth";

const MonthlyData = (props) => {
    const { acceptedRequests, loanReturnTime, budget } = props.data;
    return (
        <>
         <SingleValue title="Accepted Requests" value={ acceptedRequests } />
         <SingleValue title="Loan Return Time" value={ loanReturnTime } />
         <SingleValue title="Budget" value={ budget } />
        
         <FilterMonth/>
         </>
     );
}
 
export default MonthlyData;
