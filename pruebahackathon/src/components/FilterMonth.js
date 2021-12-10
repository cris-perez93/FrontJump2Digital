
import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
const jsonObject = require('./api/JUMPDATA.json')



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





const FilterMonth =  () => {



  return (
    <div>
      <Form>
        
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
         
        >
          {jsonObject.map((date) => (
            <option>{date.nameUUID}</option>
          ))}
        </Select>
        <Button color="success" variant="contained">Update</Button>
      </Form>
    </div> 
  );
}
export default FilterMonth;