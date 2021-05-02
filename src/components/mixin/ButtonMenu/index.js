import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button';
import { ButtonMenuWrapper } from './index.styles';

const ButtonMenu = ({ children, visible }) => {
  return (
    <ButtonMenuWrapper>
      {console.log(visible)}
      <Button visible={visible}>{children}</Button>
    </ButtonMenuWrapper>
  );
};

ButtonMenu.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

export default ButtonMenu;
