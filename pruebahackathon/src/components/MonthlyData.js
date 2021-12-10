import SingleValue from "./SingleValue";
import FilterMonth from "./FilterMonth";

const MonthlyData = (props) => {
    return (
        <>
         <SingleValue title="Accepted Requests" value={props.acceptedRequests} />
         <SingleValue title="Loan Return Time" value={props.loanReturnTime} />
         <SingleValue title="Budget" value={props.budget} />
        
         <FilterMonth/>
         </>
     );
}
 
export default MonthlyData;
