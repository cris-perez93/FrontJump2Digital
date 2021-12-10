import styled from "styled-components";

const ContainerData = styled.div`
  border: solid 1px #32cd32;
  border-radius:10px;
  width: 25%;
  text-align: center;
  font-size: 16px;
  box-shadow:0 5px 10px rgba(0,0,0,.5);
  transition: all .5s;

  &:hover{
    transform:translateY(-5px);   
  }
`;

const Title = styled.p`
  font-size: 0.8em;
`;

const Value = styled.p`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 10px;
`;

const SingleValue = (props) => {
    return (
        <ContainerData>
          <Title>{props.title}</Title>
          <Value>{props.value}</Value>
        </ContainerData>
      );
}
 
export default SingleValue;
