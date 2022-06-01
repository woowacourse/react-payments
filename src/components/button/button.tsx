import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Props = {
  id?: string;
  onClick: any;
  buttonType: string;
};

const ButtonStyled = styled.img(css`
  width: 20px;
  height: 20px;
  cursor: pointer;
`);

function Button({ id, onClick, buttonType }: Props) {
  return (
    <ButtonStyled
      id={id}
      onClick={onClick}
      src={`/img/${buttonType}-icon.png`}
      alt={`${buttonType}-icon`}
    />
  );
}

export default Button;
