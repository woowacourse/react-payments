import PropTypes from 'prop-types';

function TextField({ type, placeholder, value }) {
  return <input className="input-basic" type={type} placeholder={placeholder} value={value} />;
}

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextField;
