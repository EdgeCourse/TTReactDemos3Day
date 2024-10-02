import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
/*
The error message said they we were trying to use a ref on your TextInput component, but that is a functional component that doesn’t support refs directly. We were not using refs explicitly, but react-hook-form was!
Refs can access DOM elements and component instances directly within React code. 
Functional components don't have instances in the same way that class components do, so they can't be given refs directly.

To use refs with functional components, use React.forwardRef. Now we can pass a ref through a component to one of its children.
*/
const TextInput = forwardRef(({ label, name, error, helperText, ...other }, ref) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      error={!!error}
      helperText={helperText}
      inputRef={ref} // Pass the ref to the input element
      {...other} // Spread the rest of the props
    />
  );
});

export default TextInput;
