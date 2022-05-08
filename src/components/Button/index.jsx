import React from 'react';

import { ButtonWrapperStyled, ButtonStyled } from './style';

const Button = ({ marginTop, color, disabled, children }) => {
  return (
    <ButtonWrapperStyled marginTop={marginTop}>
      <ButtonStyled type='submit' color={color} disabled={disabled}>
        {children}
      </ButtonStyled>
    </ButtonWrapperStyled>
  );
}

export default Button;
