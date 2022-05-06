import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BackwardArrow } from '../../assets/backwardArrow.svg';

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  height: 28px;
  align-items: center;
  flex-direction: row;
  gap: 8px;

  color: #383838;
`;

const BackwardButton = ({ children, ...rest }) => {
  return (
    <StyledButton type="button" className="backward-button" {...rest}>
      <BackwardArrow />
      <p>{children}</p>
    </StyledButton>
  );
};

export default BackwardButton;
