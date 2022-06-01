import React from 'react';
import { To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import GoBackIcon from '../assets/images/goBackIcon.svg';

const StyledIconContainer = styled.div`
  position: relative;
  left: -10px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <StyledIconContainer
      onClick={() => {
        navigate(-1 as To, { replace: true });
      }}>
      <img src={GoBackIcon} alt="Go Back" />
    </StyledIconContainer>
  );
}
