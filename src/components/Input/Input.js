import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Styled from './Input.styles';

const Input = ({ textAlign, ...props }, ref) => (
  <Styled.Input ref={ref} textAlign={textAlign} {...props} />
);

Input.propTypes = {
  textAlign: PropTypes.string,
};

Input.defaultProps = {
  textAlign: 'left',
};

export default forwardRef(Input);
