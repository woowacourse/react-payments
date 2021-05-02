import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { ButtonMenuWrapper } from './index.styles';

const ButtonMenu = ({ children, disable }) => {
  return (
    <ButtonMenuWrapper>
      {console.log(disable)}
      <Button disable={disable}>{children}</Button>
    </ButtonMenuWrapper>
  );
};

ButtonMenu.propTypes = {
  children: PropTypes.node,
  disable: PropTypes.bool,
};

ButtonMenu.defaultTypes = {
  disable: false,
};

export default ButtonMenu;
