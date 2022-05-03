import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  size,
  placeholder,
  length,
  minLength,
  min,
  max,
  name,
  value,
  updateNameLength,
  updateCardForm,
  validators,
}) {
  const checkValidation = (targetValue) => {
    if (validators.checkIsNaN) validators.checkIsNaN(targetValue);

    if (validators.checkMaxLength) validators.checkMaxLength(targetValue, length);

    if (validators.checkRange) {
      if (targetValue === '') return;
      validators.checkRange(min, max, +targetValue);
    }
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;

    if (updateNameLength) updateNameLength(targetValue);

    try {
      checkValidation(targetValue);
      updateCardForm(name, targetValue);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <input
      className={`input-basic ${size}`}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      maxLength={length}
      minLength={minLength || length}
      required
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
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateNameLength: PropTypes.func,
  updateCardForm: PropTypes.func.isRequired,
  validators: PropTypes.shape({
    checkMaxLength: PropTypes.func.isRequired,
    checkIsNaN: PropTypes.func,
    checkRange: PropTypes.func,
  }).isRequired,
};

Input.defaultProps = {
  type: 'text',
  size: '',
};

export default Input;
