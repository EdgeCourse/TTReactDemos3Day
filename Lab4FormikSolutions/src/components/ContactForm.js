// src/components/ContactForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required')
});

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate an API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => ( 
        <Form>
          <Box mb={2}>
            <Field
              name="name"
              label="Name"
              component={TextInput}
              error={touched.name && Boolean(errors.name)} 
              helperText={touched.name && errors.name} 
            />
          </Box>
          <Box mb={2}>
            <Field
              name="email"
              label="Email"
              component={TextInput}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box mb={2}>
            <Field
              name="message"
              label="Message"
              multiline
              rows={4}
              component={TextInput}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            />
          </Box>
          <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;