import Chart from "./components/Chart";
import FilterMonth from "./components/FilterMonth";
import Request from "./components/Requests";
import styled from "styled-components";
import Return from "./components/Retorno"
import Budget from "./components/Budget";

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content: space-between;
   margin:0 auto;
   margin-top: 50px;
   width: 80%;
   height: 700px;
   padding: 20px;
   
   
`
const ContainerData = styled.div`
  display: flex;
  align-items:center;
  gap: 40px;
`

const ContainerGraficos = styled.div`
  width:100%;
  display: flex;
  justify-content: space-evenly;
`

function App() {
  return (
   <Container>
     <ContainerData>
     <Request/>
     <Return/>
     <Budget/>
     <FilterMonth/>
     </ContainerData>
     <ContainerGraficos>
       <Chart></Chart>
      <Chart></Chart>
     </ContainerGraficos>
     
   </Container>
  );
}

export default App;
