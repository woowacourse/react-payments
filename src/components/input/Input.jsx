import PropTypes from 'prop-types';
import { ERROR_MESSAGE } from '../../constants';

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
  updateCardForm,
  validators,
  optional,
}) {
  const checkValidation = (inputValue) => {
    if (validators.isNotNumber && validators.isNotNumber(+inputValue)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    if (validators.isOverMaxLength && validators.isOverMaxLength(inputValue, length)) {
      throw new Error(ERROR_MESSAGE.OVER_MAX_LENGTH);
    }

    if (validators.isOutOfRange && validators.isOutOfRange(min, max, +inputValue)) {
      if (inputValue === '') return;
      throw new Error(ERROR_MESSAGE.INVALID_MONTH_RANGE);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    try {
      checkValidation(inputValue);
      updateCardForm(name, inputValue);
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
      required={optional ?? true}
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
