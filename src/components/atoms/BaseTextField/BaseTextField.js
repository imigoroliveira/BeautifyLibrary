import React from 'react';
import TextField from '@mui/material/TextField';


const BaseTextField = ({ variant, color, children }) => {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined">
    Meu Textfield
  </TextField>
  );
};

export default BaseTextField;
