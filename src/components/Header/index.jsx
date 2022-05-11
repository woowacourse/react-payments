import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const Header = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Header.propTypes = {
  children: PropTypes.element,
};

export default memo(Header);
