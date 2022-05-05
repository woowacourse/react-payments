import React from 'react';

import { ButtonWrapperStyled, ButtonStyled } from './style';

const Button = ({ color, disabled, children }) => {
  return (
    <ButtonWrapperStyled>
      <ButtonStyled type='submit' color={color} disabled={disabled}>
        {children}
      </ButtonStyled>
    </ButtonWrapperStyled>
  );
}

export default Button;
