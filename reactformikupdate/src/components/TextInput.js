

// src/components/TextInput.js 
import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, name, error, helperText, ...other }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      error={!!error}
      helperText={helperText}
      {...other} 
    />
  );
};

export default TextInput;