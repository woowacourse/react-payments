import { memo } from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const ErrorMessage = ({ children }) => {
  return <styled.Container>🚫 {children}</styled.Container>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

export default memo(ErrorMessage);
