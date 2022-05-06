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
  margin-left: ${(props) => (props.showBackWard ? '0px' : '12px')};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  height: 28px;
  align-items: center;
  flex-direction: row;
  gap: 8px;

  color: #383838;

  &:hover {
    font-weight: 700;
  }
`;

const BackwardButton = ({ showBackWard, children, ...rest }) => {
  return (
    <StyledButton
      showBackWard={showBackWard}
      type="button"
      className="backward-button"
      {...rest}
    >
      {showBackWard && <BackwardArrow />}
      <p>{children}</p>
    </StyledButton>
  );
};

export default BackwardButton;
