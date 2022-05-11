import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const ErrorMessage = ({ children }) => {
  return <Styled.Container>🚫 {children}</Styled.Container>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

export default memo(ErrorMessage);
