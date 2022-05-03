import PropTypes from 'prop-types';
import * as styled from './index.styled';
import { INPUT_SCALE_NAMES } from '../../constant';

const Input = ({ scale, ...rest }) => {
  return <styled.Container scale={scale} {...rest} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  scale: PropTypes.oneOf(INPUT_SCALE_NAMES),
  maxLength: PropTypes.number,
  value: PropTypes.string,
};

export default Input;
