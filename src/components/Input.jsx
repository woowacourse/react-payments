import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_MESSAGE } from '../constants';

function Input({
  type,
  size,
  placeholder,
  length,
  minLength,
  updateNameLength,
  min,
  max,
  validators,
}) {
  const checkValidation = (event, value) => {
    if (validators.isNaN && Number.isNaN(+value)) {
      alert(ERROR_MESSAGE.NOT_NUMBER);
      event.target.value = value.substring(0, value.length - 1);
      return;
    }

    if (validators.isOverMaxLength && validators.isOverMaxLength(value, length)) {
      alert(ERROR_MESSAGE.OVER_MAX_LENGTH);
      event.target.value = value.substring(0, length);
      return;
    }

    if (validators.isOutOfRange && validators.isOutOfRange(min, max, +value)) {
      if (value === '') return;
      alert(ERROR_MESSAGE.INVALID_MONTH_RANGE);
      event.target.value = value.substring(0, value.length - 1);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (updateNameLength) updateNameLength(value);
    checkValidation(event, value);
  };

  return (
    <input
      className={`input-basic ${size}`}
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
  updateNameLength: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
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
