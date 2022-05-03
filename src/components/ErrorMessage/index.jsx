import PropTypes from 'prop-types';
import * as styled from './index.styled';

const ErrorMessage = ({ message }) => {
  return <styled.Container>{message}</styled.Container>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
