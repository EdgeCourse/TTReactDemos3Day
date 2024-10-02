
// src/components/ContactForm.js (Converted to use Formik)
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from './validationSchema'; 
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/material';

const ContactForm = () => {
  const onSubmit = (values) => {
    // Simulate an API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <Box mb={2}>
          <Field
            name="name"
            as={TextInput} 
            label="Name"
          />
          <ErrorMessage name="name" component="div" className="error" /> 
        </Box>
        <Box mb={2}>
          <Field
            name="email"
            as={TextInput}
            label="Email"
          />
          <ErrorMessage name="email" component="div" className="error" />
        </Box>
        <Box mb={2}>
          <Field
            name="message"
            as={TextInput}
            label="Message"
            multiline
            rows={4}
          />
          <ErrorMessage name="message" component="div" className="error" />
        </Box>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;