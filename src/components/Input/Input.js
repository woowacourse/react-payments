import PropTypes from 'prop-types';
import Styled from './Input.styles';

const Input = ({ inputRef, textAlign, ...props }) => (
  <Styled.Input ref={inputRef} textAlign={textAlign} {...props} />
);

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  textAlign: PropTypes.string,
};

Input.defaultProps = {
  inputRef: null,
  textAlign: 'left',
};

export default Input;
