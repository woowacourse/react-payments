import PropTypes from "prop-types";
import { InputWrapper } from "./style";

function InputBox({ size, background, border, children, error }) {
  return (
    <InputWrapper
      background={background}
      border={border}
      size={size}
      error={error}
    >
      {children}
    </InputWrapper>
  );
}

InputBox.propTypes = {
  size: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default InputBox;
