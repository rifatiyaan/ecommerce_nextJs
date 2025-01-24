import React from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const QuantityBox = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={handleDecrease}
        aria-label="Decrease quantity"
        size="large"
        sx={{ width: 40, height: 40 }}
      >
        <Remove />
      </IconButton>
      <TextField
        value={quantity}
        variant="outlined"
        size="small"
        inputProps={{ style: { textAlign: 'center', width: '50px' } }}
        sx={{ width: '50px', mx: 1 }}
        readOnly
      />
      <IconButton
        onClick={handleIncrease}
        aria-label="Increase quantity"
        size="large"
        sx={{ width: 40, height: 40 }}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default QuantityBox;
