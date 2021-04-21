import PropTypes from 'prop-types';
import Styled from './Input.styles';

const Input = ({ id, placeholder, maxLength, width, textAlign, type, onChange, value }) => (
  <Styled.Input
    id={id}
    type={type}
    placeholder={placeholder}
    maxlength={maxLength}
    width={width}
    textAlign={textAlign}
    onChange={onChange}
    value={value}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  width: PropTypes.string,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  textAlign: 'left',
  type: 'text',
  onChange: null,
  value: '',
};

export default Input;
