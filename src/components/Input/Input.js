import PropTypes from 'prop-types';
import Styled from './Input.styles';

const Input = ({ inputRef, width, textAlign, ...props }) => (
  <Styled.Input ref={inputRef} width={width} textAlign={textAlign} {...props} />
);

Input.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  width: PropTypes.string,
  textAlign: PropTypes.string,
};

Input.defaultProps = {
  inputRef: null,
  width: '100%',
  textAlign: 'left',
};

export default Input;
