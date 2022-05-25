import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  shape,
  placeholder,
  length,
  minLength,
  name,
  value,
  required,
  validators,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const checkValidation = () => {
    validators.forEach((validator) => {
      validator.validate();
    });
  };

  useEffect(() => {
    if (value === '') return;
    try {
      checkValidation();
    } catch (error) {
      onChange(value.substr(0, value.length - 1), name);
      alert(error.message);
    }
  }, [value]);

  return (
    <input
      className={`${shape}`}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      maxLength={length}
      minLength={minLength || length}
      required={required}
      onChange={handleChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  placeholder: PropTypes.string,
  length: PropTypes.number.isRequired,
  minLength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.shape({ validate: PropTypes.func })).isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  shape: '',
  placeholder: '',
  minLength: 0,
  name: '',
  required: true,
};

export default Input;
