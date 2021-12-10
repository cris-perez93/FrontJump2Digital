import styled from "styled-components";

const ContainerBudget = styled.div`
  background: yellow;
  width: 200px;
  height:200px;
`

const Budget = () => {
    return ( 
        <ContainerBudget>
            <h1>Budget</h1>
        </ContainerBudget>
     );
}
 
export default Budget;