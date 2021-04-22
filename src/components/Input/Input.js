import PropTypes from 'prop-types';
import Styled from './Input.styles';

const Input = ({ inputRef, placeholder, maxLength, width, textAlign, type, onChange, value }) => (
  <Styled.Input
    ref={inputRef}
    type={type}
    placeholder={placeholder}
    maxLength={maxLength}
    width={width}
    textAlign={textAlign}
    onChange={onChange}
    value={value}
  />
);

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  width: PropTypes.string,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  inputRef: null,
  placeholder: '',
  width: '100%',
  textAlign: 'left',
  type: 'text',
  onChange: null,
  value: '',
};

export default Input;
