import React, { useState } from 'react';

const EasyForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    if (!Object.prototype.hasOwnProperty.call(values, name)) {
      throw new Error('invalid field name');
    }

    const newValue = typeof value !== 'function' ? value : value(values[name]);

    if (validationSchema) {
      const isError = !validationSchema[name].assert(newValue);

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: {
          isError,
          errorMessage: isError ? validationSchema[name].errorMessage : null,
        },
      }));
    }

    setValues((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values, setSubmitting, errors);
  };

  return (
    <>{children(values, submitting, handleChange, handleSubmit, errors)}</>
  );
};

export default EasyForm;
