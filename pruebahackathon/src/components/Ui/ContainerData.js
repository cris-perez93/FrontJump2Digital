import styled from "styled-components";

export const ContainerData = styled.div`
  border: solid 1px #32cd32;
  border-radius:10px;
  width: 25%;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 16px;
  box-shadow:0 5px 10px rgba(0,0,0,.5);
  transition: all .5s;

  &:hover{
    transform:translateY(-5px);
    
  }
  
  
`