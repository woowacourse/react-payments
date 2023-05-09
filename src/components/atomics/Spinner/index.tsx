import React from 'react';
import styled, { css } from 'styled-components';

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ ...rest }) => {
  return <StyledDefaultLoading {...rest} />;
};

const StyledDefaultLoading = styled.div<SpinnerProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  border: 5px solid #000;

  ${(props) => {
    return (
      props.size &&
      css`
        width: ${props.size};
        height: ${props.size};
      `
    );
  }}

  ${(props) => {
    return (
      props.color &&
      css`
        border: 5px solid ${props.color}
        height: ${props.size};
      `
    );
  }}

  border-bottom-color: transparent;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
