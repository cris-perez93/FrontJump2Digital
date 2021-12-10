import FilterMonth from "./components/FilterMonth";
import Request from "./components/Requests";
import styled from "styled-components";
import Return from "./components/Retorno"
import Budget from "./components/Budget";

const Container = styled.div`
   display:flex;
   flex-direction:column;
   margin:0 auto;
   margin-top:50px;
   width: 80%;
   height: 700px;
   padding: 20px;
   background:grey;
   
`
const ContainerData = styled.div`
  display: flex;
  align-items:center;
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
     <div>
       <h1>Graficos</h1>
     </div>
   </Container>
  );
}

export default App;
