import React from 'react';
import styled from '@emotion/styled';
import IconBackArrow from '../../../images/back-arrow.svg';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function BackButton({ onClick }: Props) {
  return (
    <Button type="button" onClick={onClick}>
      <img src={IconBackArrow} alt="" />
    </Button>
  );
}

const Button = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export default BackButton;
