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
  updateCard,
  validators,
  optional,
}) {
  const { validNumber, validMaxLength, validRange } = validators;

  const checkValidation = (inputValue) => {
    if (validNumber) validNumber(+inputValue);

    if (validMaxLength) validMaxLength(inputValue, length);

    if (validRange) {
      if (inputValue === '') return;
      validRange(min, max, +inputValue);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    try {
      checkValidation(inputValue);
      updateCard(name, inputValue);
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
  updateCard: PropTypes.func.isRequired,
  validators: PropTypes.shape({
    validMaxLength: PropTypes.func.isRequired,
    validNumber: PropTypes.func,
    validRange: PropTypes.func,
  }).isRequired,
};

Input.defaultProps = {
  type: 'text',
  size: '',
};

export default Input;
