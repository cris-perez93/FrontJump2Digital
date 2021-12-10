import Chart from "./components/Chart";
import DataComponent from "./components/DataComponent";
import styled from "styled-components";

import Footer from "./components/Footer";

const chartData = [
  {name: 'january', value: 400},
  {name: 'february', value: 600},
  {name: 'march', value: 200}
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
  width: 80%;
  
  padding: 20px;
`;
const ContainerData = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
`;

const ContainerGraficos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

function App() {
  return (
    <>
      <Container>
        <ContainerData>
          <DataComponent />
        </ContainerData>
        <ContainerGraficos>
          <Chart title="Requested Money" data={chartData}></Chart>
          <Chart title="Total Users" data={chartData}></Chart>
        </ContainerGraficos>
      </Container>
      <Footer />
    </>
  );
}

export default App;
