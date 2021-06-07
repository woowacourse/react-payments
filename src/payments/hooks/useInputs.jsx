import { useEffect, useState } from "react";

export const useInput = (initialValue, { validate } = {}) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (validate && typeof validate === "function") {
      setError(validate(value));
    }
  }, [value, validate]);

  const handleValueChange = event => {
    setValue(event.target.value);

    if (!touched) {
      setTouched(true);
    }
  };

  return [value, handleValueChange, { error, touched }];
};

export const useInputs = (initialValues, { validate } = {}) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (validate && typeof validate === "function") {
      setError(validate(values));
    }
  }, [values, validate]);

  const handleValuesChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    if (!touched) {
      setTouched(true);
    }
  };

  return [values, handleValuesChange, { error, touched }];
};
