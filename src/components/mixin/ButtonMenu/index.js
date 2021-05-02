import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { ButtonMenuWrapper } from './index.styles';

const ButtonMenu = ({ children, disabled }) => {
  return (
    <ButtonMenuWrapper>
      {console.log(disabled)}
      <Button disabled={disabled}>{children}</Button>
    </ButtonMenuWrapper>
  );
};

ButtonMenu.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

ButtonMenu.defaultTypes = {
  disabled: false,
};

export default ButtonMenu;
