import React, { useState } from 'react';

const EasyForm = ({ children, initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name, callback) => {
    if (!Object.prototype.hasOwnProperty.call(values, name)) {
      throw new Error('invalid field name');
    }

    setValues((prevState) => ({
      ...prevState,
      [name]: callback(prevState[name]),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values, setSubmitting);
  };

  return <>{children(values, submitting, handleChange, handleSubmit)}</>;
};

export default EasyForm;
