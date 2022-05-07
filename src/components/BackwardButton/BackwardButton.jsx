import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
        width="24"
        height="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <p>{children}</p>
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

export default BackwardButton;
