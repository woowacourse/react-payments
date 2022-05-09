import React from 'react';

import { noop } from '../../utils';

import { ButtonWrapperStyled, ButtonStyled } from './style';

const Button = ({ type, marginTop, color, disabled, children, onClick = noop }) => {
  return (
    <ButtonWrapperStyled marginTop={marginTop}>
      <ButtonStyled type={type || 'submit'} color={color} disabled={disabled} onClick={onClick}>
        {children}
      </ButtonStyled>
    </ButtonWrapperStyled>
  );
}

export default Button;
