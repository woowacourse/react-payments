import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ICONS from '../../constants/icons';

const BackwardButton = ({ children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <StyledButton
      {...rest}
      type="button"
      onClick={() => {
        navigate(-1);
      }}
    >
      {ICONS.BACKWARD}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  color: #383838;
`;

export default BackwardButton;
