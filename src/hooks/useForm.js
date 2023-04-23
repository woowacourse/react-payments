import { useState } from 'react';

const useForm = (refs, validator) => {
  const refNames = Object.keys(refs);
  const valueObj = {};
  const errorObj = {};

  refNames.forEach((name) => {
    valueObj[name] = '';
    errorObj[name] = '';
  });

  const [values, setValues] = useState(valueObj);
  const [error, setError] = useState(errorObj);

  const findError = () => {
    Object.keys(validator).forEach((key) => {
      const errorMessage = validator[key](values[key]);

      if (errorMessage) {
        setError((prev) => ({ ...prev, [key]: errorMessage }));
        refs[key].current.focus();

        return true;
      }

      return false;
    });
  };

  const isNumeric = (v) => {
    return /^[0-9]*$/.test(v);
  };

  const onChange = (e) => {
    e.preventDefault();

    const { name, value, maxLength, dataset } = e.target;
    const { type, next } = dataset;

    if (value.length > maxLength) return;
    if (type === 'number' && !isNumeric(value)) return;

    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    if (value.length >= maxLength) {
      refs[name].current.blur();
      refs[next].current.focus();
    }

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { values, onChange, error, findError };
};

export default useForm;
