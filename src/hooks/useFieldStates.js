import { useState } from 'react';

const useFieldStates = (initialValues) => {
  const initialFieldStates = {};
  Object.keys(initialValues).forEach((name) => {
    initialFieldStates[name] = {
      value: initialValues[name],
    };
  });
  const [fieldStates, setFieldStates] = useState(initialFieldStates);
  const setFieldState = (name, state) => {
    setFieldStates((prevFieldStates) => ({
      ...prevFieldStates,
      [name]: {
        ...prevFieldStates[name],
        ...state,
      },
    }));
  };

  const getFieldProperties = (propertyName) => {
    const properties = {};

    Object.keys(fieldStates).forEach((name) => {
      if (fieldStates[name][propertyName]) {
        properties[name] = fieldStates[name][propertyName];
      }
    });

    return properties;
  };

  return { fieldStates, setFieldState, getFieldProperties };
};

export default useFieldStates;
