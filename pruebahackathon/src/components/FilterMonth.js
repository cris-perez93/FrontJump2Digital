
import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useState } from 'react';

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




const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];




 const FilterMonth = () => {

  


  

  return (
    <div>
      <Form>
        
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value = 'Date'
        >
          {names.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </Select>
        <Button color="success" variant="contained">Update</Button>
      </Form>
    </div> 
  );
}
export default FilterMonth;