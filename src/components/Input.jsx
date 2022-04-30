import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_MESSAGE } from '../constants';

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
  const checkValidation = (event, targetValue) => {
    if (validators.isNaN && Number.isNaN(+targetValue)) {
      event.target.value = targetValue.substring(0, value.length - 1);
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    if (validators.isOverMaxLength && validators.isOverMaxLength(targetValue, length)) {
      event.target.value = targetValue.substring(0, length);
      throw new Error(ERROR_MESSAGE.OVER_MAX_LENGTH);
    }

    if (validators.isOutOfRange && validators.isOutOfRange(min, max, +targetValue)) {
      if (targetValue === '') return;
      event.target.value = targetValue.substring(0, targetValue.length - 1);
      throw new Error(ERROR_MESSAGE.INVALID_MONTH_RANGE);
    }
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;
    if (updateNameLength) updateNameLength(targetValue);

    try {
      checkValidation(event, targetValue);
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
    isOverMaxLength: PropTypes.func.isRequired,
    isNaN: PropTypes.func,
    isOutOfRange: PropTypes.func,
  }).isRequired,
};

Input.defaultProps = {
  type: 'text',
  size: '',
};

export default Input;
