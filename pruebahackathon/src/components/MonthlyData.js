import SingleValue from "./SingleValue";
import FilterMonth from "./FilterMonth";

const MonthlyData = () => {
    return (
        <>
         <SingleValue title="Accepted Requests"/>
         <SingleValue title="Loan Return Time"/>
         <SingleValue title="Budget"/>
        
         <FilterMonth/>
         </>
     );
}
 
export default MonthlyData;
