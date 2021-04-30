import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { ButtonMenuWrapper } from './index.styles';

const ButtonMenu = ({ children }) => {
  return (
    <ButtonMenuWrapper>
      <Button>{children}</Button>
    </ButtonMenuWrapper>
  );
};

ButtonMenu.propTypes = {
  children: PropTypes.node,
};

export default ButtonMenu;
