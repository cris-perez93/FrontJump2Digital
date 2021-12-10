
import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const Select = styled.select`
   width: 200px;
   border-radius:5px;
   padding:5px;
   margin-bottom: 5px;
`
const Form = styled.form`
  display:flex;
  flex-direction:column;
`





const FilterMonth = (props) => {
  return (
    <div>
      <Form>
        
        <Select
           onChange={(e)=>props.onSelectMonth(e.target.value)}
           value={props?.option}
        >
          {props.options?.map((option) => (
            <option>{option?.month}</option>
          ))}
        </Select>
        <Button color="success" variant="contained">Update</Button>
      </Form>
    </div> 
  );
}
export default FilterMonth;