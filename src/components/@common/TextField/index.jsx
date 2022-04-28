import PropTypes from 'prop-types';

function TextField({ type, name, value, placeholder, maxLength, onChange, onBlur }) {
  return (
    <input
      type={type}
      className="input-basic"
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  maxLength: 0,
  onBlur: () => {},
};

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default TextField;
