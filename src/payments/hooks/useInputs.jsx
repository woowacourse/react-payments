import { useState } from "react";

export const useInput = (initialValue, { validate } = {}) => {
  const [value, setValue] = useState(initialValue);

  const error = validate?.(value);

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  return [value, handleValueChange, { error }];
};

export const useInputs = (initialValues, { validate } = {}) => {
  const [values, setValues] = useState(initialValues);

  const error = validate?.(values);

  const handleValuesChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return [values, handleValuesChange, { error }];
};
