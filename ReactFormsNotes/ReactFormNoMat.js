//This is how each component works without the styling Material library 
//to use, divide into three files

// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  // State to manage form values
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Validate form values
  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = 'Name is required';
    if (!values.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) tempErrors.email = 'Email is not valid';
    if (!values.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate an API call
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setValues({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          style={{ 
            border: errors.name ? '1px solid red' : '1px solid #ccc', 
            padding: '0.5rem',
            width: '100%'
          }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          style={{ 
            border: errors.email ? '1px solid red' : '1px solid #ccc', 
            padding: '0.5rem',
            width: '100%'
          }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          style={{ 
            border: errors.message ? '1px solid red' : '1px solid #ccc', 
            padding: '0.5rem',
            width: '100%'
          }}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;


// src/components/TextInput.js
import React from 'react';

const TextInput = ({ label, name, value, onChange, onBlur, error, helperText, multiline, rows }) => {
  const inputProps = {
    type: multiline ? 'textarea' : 'text',
    id: name,
    name,
    value,
    onChange,
    onBlur,
    rows: multiline ? rows : undefined, // Only set rows if it's a textarea
    style: {
      border: error ? '1px solid red' : '1px solid #ccc',
      padding: '0.5rem',
      width: '100%',
      resize: multiline ? 'vertical' : 'none', // Allow vertical resize for textarea
    },
  };

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      {multiline ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
      {error && <p style={{ color: 'red' }}>{helperText}</p>}
    </div>
  );
};

export default TextInput;

// src/components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ children, ...props }) => {
  return (
    <button type="submit" style={{
      backgroundColor: 'blue', // primary color
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;