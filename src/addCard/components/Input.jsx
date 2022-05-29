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
  onBlur,
}) {
  const checkValidation = (targetValue) => {
    validators.forEach((validator) => {
      validator.validate(targetValue);
    });
  };

  const handleChange = (event) => {
    try {
      checkValidation(event.target.value);
      onChange(event.target.value, name);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur(name);
    }
  };

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
      onBlur={handleBlur}
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
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  shape: '',
  placeholder: '',
  minLength: 0,
  name: '',
  required: true,
  onBlur: null,
};

export default Input;
