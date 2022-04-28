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
      alert(ERROR_MESSAGE.NOT_NUMBER);
      event.target.value = targetValue.substring(0, value.length - 1);
      return false;
    }

    if (validators.isOverMaxLength && validators.isOverMaxLength(targetValue, length)) {
      alert(ERROR_MESSAGE.OVER_MAX_LENGTH);
      event.target.value = targetValue.substring(0, length);
      return false;
    }

    if (validators.isOutOfRange && validators.isOutOfRange(min, max, +targetValue)) {
      if (targetValue === '') return true;
      alert(ERROR_MESSAGE.INVALID_MONTH_RANGE);
      event.target.value = targetValue.substring(0, targetValue.length - 1);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;

    if (updateNameLength) updateNameLength(targetValue);
    if (checkValidation(event, targetValue)) {
      updateCardForm(name, targetValue);
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
  length: PropTypes.number,
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
  }),
};

Input.defaultProps = {
  type: 'text',
  size: '',
};

export default Input;
