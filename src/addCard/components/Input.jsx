import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AddCardContext from '../../AddCardContext';

function Input({ type, size, placeholder, length, minLength, name, value, required, validators }) {
  const { updateCard } = useContext(AddCardContext);

  const handleChange = (event) => {
    updateCard(name, event.target.value);
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
      updateCard(name, value.substr(0, value.length - 1));
      alert(error.message);
    }
  }, [value]);

  return (
    <input
      className={`input-basic ${size}`}
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
  size: PropTypes.string,
  placeholder: PropTypes.string,
  length: PropTypes.number.isRequired,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.shape({ validate: PropTypes.func })).isRequired,
};

Input.defaultProps = {
  type: 'text',
  size: '',
  placeholder: '',
  minLength: 0,
  required: true,
};

export default Input;
