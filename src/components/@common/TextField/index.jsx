import PropTypes from 'prop-types';

function TextField({ type, name, placeholder, onChange, onBlur, value, maxLength }) {
  return (
    <input
      name={name}
      className="input-basic"
      type={type}
      placeholder={placeholder}
      value={value}
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
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default TextField;
