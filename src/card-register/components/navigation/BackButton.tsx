import React from 'react';
import styled from '@emotion/styled';
import IconBackArrow from '../../../images/back-arrow.svg';

function BackButton() {
  return (
    <div>
      <Button type="button">
        <img src={IconBackArrow} alt="" />
      </Button>
    </div>
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
