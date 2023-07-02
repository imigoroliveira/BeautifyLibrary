import React from 'react';
import Button from '@mui/material/Button';


const BaseButton = ({ variant, color, children }) => {
  return (
    <Button variant="contained" color="primary">
    Meu Botão
  </Button>
  );
};

export default BaseButton;
